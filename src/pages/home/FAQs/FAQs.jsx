import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";



const faqData = [
  {
    title: "How do I create a volunteer need post?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          To create a volunteer need post, log in to your account and click the "Create Post" button in the dashboard. Fill in the required details such as title, description, category, and deadline, and submit your post.
        </p>
      </>
    ),
  },
  {
    title: "Can I update or delete my post?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, you can update or delete your post. Go to your dashboard, find the post you want to modify, and click "Edit" to make changes or "Delete" to remove it.
        </p>
      </>
    ),
  },
  {
    title: "How can I volunteer for someone else's post?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Browse through the available posts and click on the one you’re interested in. Once on the post details page, click the "Volunteer Now" button to apply as a volunteer.
        </p>
      </>
    ),
  },
  {
    title: "Is there a way to track my applications as a volunteer?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, you can track your volunteer applications in the "My Applications" section of your profile, where all your applied posts will be listed.
        </p>
      </>
    ),
  },
  {
    title: "What happens after I volunteer for a post?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The post creator will review your application and may contact you if they think you're a good fit. Stay tuned for updates in your notifications section.
        </p>
      </>
    ),
  },
];

export default function FAQs() {
  return (
    <div className="bg-white mb-10 mx-auto py-10 px-10 rounded-lg shadow-lg dark:bg-gray-900">
      <h2
        
        
        
        
        className="text-3xl font-semibold text-center mb-8 dark:text-white">
        FAQs
      </h2>
      <div
>
        <Accordion collapseAll>
        {faqData.map((faq, index) => (
          <AccordionPanel key={index}>
            <AccordionTitle>{faq.title}</AccordionTitle>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
    </div>
    </div >
  );
}
