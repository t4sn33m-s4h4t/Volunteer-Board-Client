import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { motion } from "motion/react";
import { fadeIn } from "../../variant"

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
    <div className="bg-white mt-10 p-10 rounded-lg shadow-lg dark:bg-gray-900">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-3xl font-semibold text-center mb-8 dark:text-white">
        FAQs
      </motion.h2>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
>
        <Accordion collapseAll>
        {faqData.map((faq, index) => (
          <AccordionPanel key={index}>
            <AccordionTitle>{faq.title}</AccordionTitle>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
    </motion.div>
    </div >
  );
}
