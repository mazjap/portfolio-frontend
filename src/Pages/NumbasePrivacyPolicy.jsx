import { Header, Footer, Contact } from '../Components';
import './NumbaseSupport.css';

export default function NumbasePrivacyPolicy() {
  return (
    <div>
      <Header title='Numbase' subtitle='Privacy Policy - Last updated: January 15th, 2025' />

      <main className='content'>
        <h3>Overview</h3>
        <span>Numbase is committed to protecting your privacy. This privacy policy explains that Numbase does not collect, use, or share any personal information.</span>

        <h3>Data Collection</h3>

        <h5>Numbase does not:</h5>
        <ul>
          <li>Collect any personal information</li>
          <li>Store any user data</li>
          <li>Use analytics or tracking</li>
          <li>Require internet connectivity</li>
          <li>Access any system resources beyond basic app functionality</li>
        </ul>

        <h5>Data Storage</h5>
        <span>All calculations and conversions are performed locally on your device. No data is stored or transmitted.</span>

        <h5>Changes to This Policy</h5>
        <span>If we make changes to this privacy policy, we will post the updated version here.</span>

        <h5>Contact</h5>
        <span>If you have questions about this privacy policy, you can contact us at <a href='mailto:jordan.c4922@gmail.com'>jordan.c4922@gmail.com</a>.</span>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}