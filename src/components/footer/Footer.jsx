import { Link } from "react-router-dom";
import NewsletterSubscribe from "./NewsletterSubscribe ";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-5 pt-8">
      <div className="grid gap-10 row-gap-6 mb-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" className="inline-flex items-center">
            <img
              className={"h-10"}
              src="assets/images/Logo.png"
              alt="company logo"
            />
          </a>
          <div className="lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Generate detailed property descriptions, captivating visuals, and
              an effortless browsing experience. Step into the future of real
              estate with ReaEstateGenious.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Don’t Miss Out
          </span>
          <p className="mt-4 text-sm text-gray-500">
            Subscribe now to be among the first to access exclusive invoicing
            tools!
          </p>
          <NewsletterSubscribe />
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+08801733703448"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              +088 01733703448
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:mgrahul639@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              mgrahul639@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              Mirpur-10, Dhaka, Bangladesh
            </a>
          </div>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/mgrahul639/"
              target="_blank"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
              </svg>
            </a>
            <a
              href="https://github.com/mgrahul63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
      -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
      2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1
      .16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
            <a
              href="https://web.facebook.com/mgrahul639/"
              target="_blank"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-3 pb-4 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} AIEstateImageGenerator. All rights
          reserved.
        </p>
        <p className="text-sm mt-2 lg:mt-0">
          Powered by OpenAI | Developed by{" "}
          <Link
            to={"https://github.com/mgrahul63"}
            className="text-green-600"
            target="_blank"
          >
            MG Rahul
          </Link>{" "}
          |{" "}
          <Link to="/privacy" className="text-[#a3a5a7] hover:text-gray-800">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-[#a3a5a7] hover:text-gray-800">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}
