import { getProfileByUsername } from "@/lib/actions/profile";
import ProfileView from "@/components/profile/ProfileView";

export default async function PublicProfilePage({ params }) {
  const { username } = await params;
  const profile = await getProfileByUsername(username);

  if (!profile) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight">
          User not found
        </h1>
        <p className="mt-2 text-zinc-400">
          No profile exists for @{username}.
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12">
      <ProfileView profile={profile} />
    </main>
  );
}
