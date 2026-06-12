import { redirect } from "next/navigation";
import Link from "next/link";
import { getOwnProfile } from "@/lib/actions/profile";
import ProfileForm from "@/components/profile/ProfileForm";

export default async function OwnProfilePage() {
  const profile = await getOwnProfile();

  if (!profile) {
    redirect("/login");
  }

  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12">
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight">
        Your Profile
      </h1>
      <Link
        href={`/profile/${profile.username}`}
        className="mb-8 text-sm text-emerald-400 hover:underline"
      >
        View public profile
      </Link>
      <ProfileForm profile={profile} />
    </main>
  );
}
