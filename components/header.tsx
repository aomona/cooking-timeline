import UserIcon from "@/components/user-icon";

export default function Header() {
  return (
    <header className="flex flex-row items-center p-4 border-b gap-4">
      <h1>Cooking Timeline</h1>
      <div className="ml-auto">
        <UserIcon />
      </div>
    </header>
  );
}
