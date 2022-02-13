import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey! My name is Marcos. I'm a teacher and software developer. I'm
          learning Next.js now.
        </p>
        <p>
          Let's talk on{" "}
          <a href="mailto=ti.marcosdias@gmail.com"> ti.marcosdias@gmail.com</a>.
        </p>
      </section>
    </Layout>
  );
}
