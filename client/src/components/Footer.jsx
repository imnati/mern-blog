import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsTelegram, BsLinkedin } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              Daily
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white">
                Orthodoxy
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daily-Orthodoxy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://t.me/imnati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram Profile
                </Footer.Link>
                <Footer.Link
                  href="https://www.github.com/imnati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="tel:+251946366664"
                  className=" hover:text-teal-500"
                >
                  0946366664
                </Footer.Link>
                <Footer.Link
                  href="tel:+251716366664"
                  className=" hover:text-teal-500"
                >
                  07166366664
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Natnael Akalewold"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/natnael-akalewold-7a4610289"
              icon={BsLinkedin}
            />
            <Footer.Icon href="https://x.com/imnatnael?s=09" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/imnati" icon={BsGithub} />
            <Footer.Icon href="https://t.me/imnati" icon={BsTelegram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
