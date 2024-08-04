import React from "react";

function Contact() {
  return (
    <section className="flex flex-col h-full w-full">
      <div className="flex h-1/2 w-full items-center justify-start text-white ">
        <h1 className="text-[200px]">Rohit</h1>
      </div>
      <div className="flex flex-col  h-1/2 w-full items-start justify-end text-white p-16 text-4xl space-y-6">
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Linkdin</span>
      </div>
    </section>
  );
}

export default Contact;
