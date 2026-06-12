export default function ProfileView({ profile }) {
  const initial = (profile.display_name || profile.username || "?")
    .charAt(0)
    .toUpperCase();

  return (
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      {profile.avatar_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar_url}
          alt={profile.username}
          className="h-24 w-24 rounded-full border-2 border-emerald-500 object-cover"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-500 bg-zinc-900 text-3xl font-bold text-emerald-400">
          {initial}
        </div>
      )}

      <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
        {profile.display_name || profile.username}
      </h1>
      <p className="text-zinc-500">@{profile.username}</p>

      {profile.bio && (
        <p className="mt-4 text-sm text-zinc-300">{profile.bio}</p>
      )}
    </div>
  );
}
