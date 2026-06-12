import { getProfileByUsername } from "@/lib/actions/profile";
import ProfileView from "@/components/profile/ProfileView";

export default async function PublicProfilePage({ params }) {
  const { username } = await params;
  const profile = await getProfileByUsername(username);

  if (!profile) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        <h1
          className="font-extrabold"
          style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "var(--text)" }}
        >
          User not found
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-2)" }}>
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
