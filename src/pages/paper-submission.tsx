/* eslint-disable react/no-unescaped-entities */
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

function PaperSubmission() {
  return (
    <>
      <Head>
        <title>
          Paper Submission - ICSICST - International Conference on Sustainable &amp; Intelligent Computing in Science and Technology
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />

      <main className="bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        {/* Downloads Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center text-center max-w-lg mx-auto">
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
           Ready to Submit Your Paper?
            </h2>
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <Link
                href="https://cmt3.research.microsoft.com/ICSICST2025/Submission/Index"
                className="inline-flex items-center px-5 sm:px-7 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg w-fit"
              >
                <svg
                  className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Submit Paper Now
              </Link>
            </div>
          </div>
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center text-center max-w-lg mx-auto">
          
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Downloads</h2>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {[
              { text: "Paper Template For AIPCP Conference Proceedings", href: "https://docs.google.com/document/d/17t9-gdQPzWw5SWyTmQuX-ewVFIqkscJi/edit?usp=drive_link&ouid=104022846042193403930&rtpof=true&sd=true" },
              { text: "Paper Template For Taylor & Francis CRC Press Book Series", href: "https://docs.google.com/document/d/1Ddg9oytIUo9ivSM2vDHCAW4tW4VM3En_/edit?usp=drive_link&ouid=104022846042193403930&rtpof=true&sd=true" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-300 w-fit"
              >
                <svg
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                {item.text}
              </Link>
            ))}
          </div>
          </div>
          
        {/* Guidelines Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Paper Submission Guidelines And Publication Ethics</h1>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Instructions:</h2>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Papers submitted to the conference should report your original work, unpublished before. They could be either experimental or theoretical and must not be under consideration for publication elsewhere. We firmly believe that ethical conduct is the most essential virtue of any academics. Any act of plagiarism or self-plagiarism is unacceptable and academic misconduct will not be tolerated. If an author is found to commit an act of plagiarism (more than 10%), we will reject the article submitted or delete the article from the final publications.",
                  "Fabrication of data is an egregious departure from the expected norms of scientific conduct, as is the selective reporting of data with the intent to mislead or deceive, as well as the theft of data or research results from others.",
                  "Kindly use the Full Paper Template provided above.",
                  "The plagiarism should be less than 10 percentage. Organizers will check Plagiarism through Turnitin.",
                  "The full article must be submitted as a MS Word file in DOC or DOCX format.",
                  "Before submitting your paper, please ensure that the English used is clear, concise and coherent. This is especially important if English is not your first language.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3"> 
                    <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                <span className="font-bold">Note: </span>
                At least one author must register for the paper to be included in the conference. Only registered &amp; presented authors will be allowed to present papers and will be given the conference certificates. Only presented papers will be recommended for publication. Nobody will be allowed to make more than two presentations during the conference. This is done to ensure diversity and inclusivity of more active participants in the conference. 
                <span className="font-bold"> NO PAPER TO HAVE MORE THAN SIX AUTHORS.</span>
                <span className="font-bold"> THE PAPER SHALL NOT BE LESS THAN FOUR PAGES AND MORE THAN 10 PAGES.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Submission Process Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">How to submit a manuscript?</h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              "Perspective authors shall submit the full-length manuscripts via given submission link",
              "Authors will receive notification from the conference once the Technical Program Committee has reviewed the manuscript. The committee accepts only full-length papers for review not the abstracts.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Review Process Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Review Process & Oral Presentation</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
            All papers with a similarity score of less than 10% will undergo a double-blind review. The technical committee of the conference will review the papers, and the authors will be notified of the paper's status, which can be one of the following:
          </p>
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            {[
              "Accepted for oral presentation",
              "Accepted with minor corrections for Oral Presentation",
              "Rejected",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700">
            Papers recommended by double blind review process on basis of originality, novelty and relevance of work will be considered.
          </p>
        </div>

        

        <Sponsored />
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(PaperSubmission), { ssr: false });

