"use client";

import { useState } from "react";
import Image from "next/image";
import avatar from "@/assets/user.jpg";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "@heroui/react";

const MyProfile = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState(user?.name || "");
  const [imageUrl, setImageUrl] = useState(user?.image || "");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUpdate = async () => {
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await authClient.updateUser({
        name: name.trim(),
        image: imageUrl.trim() || undefined,
      });

      setSuccess(true);
      router.refresh();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
      <div className="rounded-2xl p-8 w-full max-w-md shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 mb-3">
            <Image
              src={user.image || avatar}
              alt="Profile preview"
              fill
              className="rounded-full object-cover ring-2 ring-green-400 ring-offset-2"
            />
          </div>
        </div>

        <h1 className="text-2xl font-normal text-center mb-6">Edit Profile</h1>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase font-sans">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="border-2  rounded-xl px-4 py-3   outline-none focus:border-amber-700 transition-colors"
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase ">Photo URL</label>
            <input
              type="url"
              value={imageUrl}
              onChange={handleImageUrlChange}
              placeholder="https://example.com/photo.jpg"
              className="border-2 rounded-xl px-4 py-3   outline-none focus:border-amber-700 transition-colors "
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {success && (
            <p className="text-green-500 text-sm text-center">
              Profile updated successfully!
            </p>
          )}

          <Button
            variant="secondary"
            onClick={handleUpdate}
            disabled={loading}
            className={"w-full"}
          >
            {loading ? <Spinner color="accent" /> : "Update Profile"}
          </Button>

          <button
            onClick={() => router.back()}
            className="text-stone-400 text-sm text-center hover:text-stone-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
