const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 pb-10 pt-20 md:pt-24 lg:pt-24">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At AI Estate Image Generator, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard the data you provide while using
          our platform.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          When using our platform, we may collect personal information such as
          your name, email address, and usage preferences. Additionally, we may
          gather property-related details you input for AI image generation,
          including property type, style, and interior/exterior preferences.
          This information helps us deliver a personalized and efficient user
          experience.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Use of Information
        </h2>
        <p className="mb-4">
          We use the information we collect for purposes including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Generating personalized AI property images based on your inputs
          </li>
          <li>Improving the platform’s functionality and AI models</li>
          <li>Responding to inquiries and providing support</li>
          <li>
            Sending important updates, announcements, and service notifications
          </li>
          <li>Analyzing user trends to enhance features</li>
          <li>Ensuring security and preventing unauthorized access</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information. We may share limited
          data with trusted third-party service providers who help us operate
          our platform, such as hosting, analytics, or AI service providers. All
          third parties are required to maintain confidentiality and follow
          industry-standard security practices.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">Cookies</h2>
        <p className="mb-4">
          Our platform uses cookies to enhance your experience, remember your
          preferences, and provide analytics about usage. By using our service,
          you consent to the use of cookies in accordance with this Privacy
          Policy.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">Security</h2>
        <p className="mb-4">
          We implement reasonable technical and organizational measures to
          protect your data. While we strive to maintain a secure environment,
          no system is completely immune to security risks. We encourage users
          to practice safe handling of their personal information.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Changes to this Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. Updates will be posted on this
          page, and your continued use of the platform constitutes acceptance of
          the updated policy.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have questions, concerns, or suggestions regarding this Privacy
          Policy or your personal data, please contact us at{" "}
          <span className="text-primary">airealestate90@gmail.com</span>. We are
          committed to addressing your inquiries promptly.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
