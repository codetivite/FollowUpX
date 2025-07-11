"use client"; // Required for interactivity

import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import WaitlistButton from "@components/components/headerButtons/WaitlistButton";
import FAQSection from "@components/components/FAQ/FAQ";
import JoinWaitlistModal from "@components/components/modal/JoinWaitlistModal";
import ScrollToTopButton from "@components/components/scrollToTopButton/scrollToTopButton";
import { useState } from "react";
import AppImage from "@components/components/AppImage/AppImagee";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      /> */}

      {/* landing page */}
      <section className={styles.landingMain}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>AI That Follows Up for You</h1>
            <p className={styles.subtext}>
              Automate and personalize your follow-up emails with ease.
              <br />
              Save time, boost engagement, and close more deals effortlessly.
            </p>
            <div className={styles.buttons}>
              <WaitlistButton variant="secondary" isLive={false} onClick={openModal} />
              <button className={styles.demo}>Request Demo</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <AppImage
              src="/land-image.svg"
              alt="Landing Image"
              width={396}
              height={234}
              className={styles.mainImg}
            />
          </div>
        </div>
      </section>

      {/* trusted section */}
      <section className={styles.trustedSection}>
        <h2 className={styles.trustedTitle}>Trusted by Leading Innovators</h2>
        <div className={styles.trustedLogos}>
          <AppImage
            src="/codetivite.svg"
            alt=""
            width={70}
            height={70}
            className={styles.companyLogo}
          />
          <AppImage
            src="/google (2).svg"
            alt=""
            width={70}
            height={70}
            className={styles.companyLogo}
          />
          <AppImage
            src="/hubspot.svg"
            alt=""
            width={70}
            height={70}
            className={styles.companyLogo}
          />
          <AppImage
            src="/amazon.svg"
            alt=""
            width={70}
            height={70}
            className={styles.companyLogo}
          />
        </div>
      </section>

      {/* features section */}
      <section className={styles.featuresSection} id="features">
        <h2 className={styles.featuresTitle}>
          Powerful Features To Elevate Your Outreach
        </h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <AppImage
              src="tone-detection.svg"
              alt="Feature 1"
              width={50}
              height={50}
              className={styles.featureImg}
            />
            <h3 className={styles.featureTitle}>AI-Powered Tone Detection</h3>
            <p>
              Analyzes the tone of your emails and suggests personalized
              follow-up messages that resonate with your recipients.
            </p>
          </div>
          <div className={styles.feature}>
            <AppImage
              src="smart-follow.svg"
              alt="Feature 2"
              width={50}
              height={50}
              className={styles.featureImg}
            />
            <h3 className={styles.featureTitle}>Smart Follow-Ups</h3>
            <p>
              AI-driven Personalized emails that adapts to recipient behavior
              for maximum impact.
            </p>
          </div>
          <div className={styles.feature}>
            <AppImage
              src="reminders.svg"
              alt="Feature 3"
              width={50}
              height={50}
              className={styles.featureImg}
            />
            <h3 className={styles.featureTitle}>Follow-Up Reminders</h3>
            <p>
              Never miss a follow-up again. Set reminders for important emails
              and receive timely notifications to keep you on track..
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className={styles.worksContainer}>
        <div className={styles.workSection}>
          <h2 className={styles.worksTitle}>How It Works</h2>
          <div className={styles.worksSteps}>
            <div className={styles.steps}>
              <AppImage
                src="/works1.svg"
                alt="Connect Inbox"
                width={40}
                height={70}
                className={styles.stepIcon}
              />
              <div className={styles.stepText}>
                <h3>Connect Your Inbox</h3>
                <p>Connect your email account with Follow Up X in seconds.</p>
              </div>
            </div>
            <div className={styles.steps}>
              <AppImage
                src="/works2.svg"
                alt="Connect Inbox"
                width={40}
                height={70}
                className={styles.stepIcon}
              />
              <div className={styles.stepText}>
                <h3>Customize Your Follow-Ups</h3>
                <p>
                  Upload contact details and notes about each lead. You can also import from your CRM.
                </p>
              </div>
            </div>
            <div className={styles.steps}>
              <AppImage
                src="/works3.svg"
                alt="Connect Inbox"
                width={40}
                height={70}
                className={styles.stepIcon}
              />
              <div className={styles.stepText}>
                <h3>Automate and Track</h3>
                <p>
                  Set your preferences and let FollowUpX take over with smart scheduling and real-time tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.worksImage}>
          <AppImage
            src="/works-image.svg"
            alt="How It Works"
            width={615}
            height={410}
            className={styles.worksImg}
          />
        </div>
      </section>

      {/* who section */}
      <section className={styles.whoSection}>
        <div className={styles.whoText}>
          <h2 className={styles.whoTitle}>Who Is This For?</h2>
          <p>Built for Every Professional Who Follows Up</p>
        </div>
        <div className={styles.whoTypes}>
          <div className={styles.types}>
            <div className={styles.typeImage}>
              <AppImage
                src="/sales.svg"
                alt="Sales Professionals"
                width={50}
                height={50}
                className={styles.typeIcon}
              />
            </div>
            <div className={styles.typeText}>
              <h3>Sales Professionals</h3>
              <p>Close more deals with timely and personalized follow-ups.</p>
            </div>
          </div>
          <div className={styles.types}>
            <div className={styles.typeImage}>
              <AppImage
                src="/success.svg"
                alt="Customer Success Teams"
                width={50}
                height={50}
                className={styles.typeIcon}
              />
            </div>
            <div className={styles.typeText}>
              <h3>Customer Success Teams</h3>
              <p>Ensure customer satisfaction with proactive communication.</p>
            </div>
          </div>
          <div className={styles.types}>
            <div className={styles.typeImage}>
              <AppImage
                src="/marketing.svg"
                alt="Marketing Teams"
                width={50}
                height={50}
                className={styles.typeIcon}
              />
            </div>
            <div className={styles.typeText}>
              <h3>Marketing Teams</h3>
              <p>
                Nurture leads and drive conversions with automated follow-ups.
              </p>
            </div>
          </div>
          <div className={styles.types}>
            <div className={styles.typeImage}>
              <AppImage
                src="/consultants.svg"
                alt="Consultants"
                width={50}
                height={50}
                className={styles.typeIcon}
              />
            </div>
            <div className={styles.typeText}>
              <h3>Consultants</h3>
              <p>
                Stay top-of-mind with clients and prospects through consistent
                follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* premium plan section */}
      <section className={styles.premiumSection} id="pricing">
        <h2 className={styles.premiumTitle}>Premium Plans</h2>
        <div className={styles.premiumFeatures}>
          <div className={styles.featureItem}>
            <div className={styles.featureHeader}>
              <span>Free</span>
              <h3>0$</h3>
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>100 emails/month</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>3 leads</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Basic tracking</p>
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureHeader}>
              <span>Pro</span>
              <h3>Coming Soon</h3>
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>500 emails/month</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Unlimited leads</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Advanced tracking</p>
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureHeader}>
              <span>Team</span>
              <h3>Coming Soon</h3>
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Unlimited emails</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Unlimited leads</p>
              </div>
              <div className={styles.featureDetail}>
                <FaCheck />
                <p>Team collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* transform section */}
      <section className={styles.transformContainer}>
        <div className={styles.transformSection}>
          <div className={styles.transformTextContainer}>
            <h2 className={styles.transformTitle}>
              Ready to Transform Your Outreach ?
            </h2>
            <p className={styles.transformText}>
              Join our Waitlist today and get early access to FollowUpX
            </p>
          </div>
          <div className={styles.transformForm}>
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.transformInput}
              />
              <WaitlistButton variant="small" isLive={false} onClick={openModal} />
            </form>
          </div>
        </div>
      </section>

      {/* story section */}
      <section className={styles.storySection} id="about">
        <div className={styles.storyContainer}>
          <div className={styles.storyTextContainer}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <p className={styles.storyText}>
              At FollowUpX, we're a team of passionate individuals dedicated to
              transforming the way businesses connect with their leads. Our
              journey began with a shared vision: to create an AI-powered
              assistant that not only automates follow-up emails but also
              personalizes them, ensuring every interaction feels genuine and
              impactful.
            </p>
          </div>
          <div className={styles.storyImageContainer}>
            <div className={styles.storyImageSection}>
              <div className={styles.storyImageHolder}>
                <AppImage
                  src="/story2 (5).svg"
                  alt="Professionals"
                  width={50}
                  height={50}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImageText}>
                <h4>Aloysius Dominic</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className={styles.storyImageSection}>
              <div className={styles.storyImageHolder}>
                <AppImage
                  src="/story2 (3).svg"
                  alt="Professionals"
                  width={50}
                  height={50}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImageText}>
                <h4>A.E</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className={styles.storyImageSection}>
              <div className={styles.storyImageHolder}>
                <AppImage
                  src="/story2 (2).svg"
                  alt="Professionals"
                  width={50}
                  height={50}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImageText}>
                <h4>Somtochukwu</h4>
                <p>Cybersecurity Analyst</p>
              </div>
            </div>
            <div className={styles.storyImageSection}>
              <div className={styles.storyImageHolder}>
                <AppImage
                  src="/story2 (1).svg"
                  alt="Professionals"
                  width={50}
                  height={50}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImageText}>
                <h4>Joy Chukwuma</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className={styles.storyImageSection}>
              <div className={styles.storyImageHolder}>
                <AppImage
                  src="/story2 (4).svg"
                  alt="Professionals"
                  width={50}
                  height={50}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImageText}>
                <h4>Onwuta Ebube</h4>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent question section */}
      <FAQSection />

       {/* Modal */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />

      {/* scroll to the top */}
      <ScrollToTopButton />
    </>
  );
}

