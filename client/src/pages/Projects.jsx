import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Currently I don't have any project to show, but to see my progresses and
        get contacted for any projects, here is my Github account,
        <span className="text-teal-500 text-lg hover:underline p-2">
          <a href="https://github.com/imnati" target="_blank">
            My Github account
          </a>
        </span>{" "}
        and Telegram account
        <span className="text-teal-500 text-lg hover:underline p-2">
          <a href="https://t.me/imnati" target="_blank">
            My Telegram account
          </a>
        </span>
      </p>
      <CallToAction />
    </div>
  );
}
