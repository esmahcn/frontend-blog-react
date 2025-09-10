import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 md:pt-32">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">MyBlog</span>! We are passionate about sharing insightful content and keeping our readers informed.
        </p>

        <p className="text-gray-700 mb-4">
          Our goal is to provide high-quality blogs on a variety of topics. Whether you are here to learn, explore, or just browse, we have something for everyone.
        </p>

        <p className="text-gray-700 mb-4">
          This blog platform was built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>. We hope you enjoy your stay!
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Admin / Developer: Esma Hacene</li>
            <li>Content Manager: Ahlem Messaoudi</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;