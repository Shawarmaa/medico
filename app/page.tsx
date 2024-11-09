import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container">
      <Button variant={"outline"}>Button</Button>
      <ModeToggle/>
      <h1>hi wassup </h1>
    </div>
  );
}
