import { Suspense } from "react";

import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-[100px] mt-10">
      <div className="flex flex-col gap-10 md:flex-row md:gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
