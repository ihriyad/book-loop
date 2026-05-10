import { headers } from "next/headers";
import MyProfile from "@/components/profile/MyProfile";
import { auth } from "@/lib/auth";

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <MyProfile user={session?.user} />;
}
