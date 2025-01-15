import { Header, Footer, Contact } from '../Components';
import './NumbaseSupport.css';

export default function NumbaseSupport() {
  return (
    <div>
      <Header title='Numbase Support' subnote='v1.0' subtitle='Numbase is a macOS utility for converting between number bases (decimal, binary, hexadecimal, and octal) and performing calculations in different bases.' />

      <main className='content'>
        <h3>System Requirements</h3>
        <ul>
          <li><b>macOS 15.0 (Sequoia)</b> or later</li>
          <li>Apple Silicon or Intel Mac</li>
        </ul>

        <h3>Features</h3>
        <h5>- Core Features:</h5>
        <ul>
          <li>
            Convert between number bases:
            <ul>
              <li>Decimal (base 10)</li>
              <li>Binary (base 2)</li>
              <li>Hexadecimal (base 16)</li>
              <li>Octal (base 8)</li>
            </ul>
          </li>
          <li>Real-time conversion with error validation</li>
          <li>One-click copying of results</li>
        </ul>
        <h5>- Mathematical Operations:</h5>
        <ul>
          <li>Addition (+)</li>
          <li>Subtraction (-)</li>
          <li>Multiplication (×)</li>
          <li>Division (÷)</li>
          <li>Modulo (%)</li>
          <li>Logical AND (&)</li>
          <li>Logical OR (|)</li>
          <li>Logical XOR (^)</li>
          <li>Calculations in any supported base</li>
        </ul>
        <h5>- Binary Manipulation:</h5>
        <ul>
          <li>Visual bit toggling</li>
          <li>Left/right bit shifting</li>
          <li>Set/Clear all bits</li>
          <li>Flip all bits</li>
          <li>Increase/decrease bit count</li>
          <li>View representations in all bases simultaneously</li>
          <li>View signed and unsigned decimal values</li>
        </ul>
        <h5>- Usability Features:</h5>
        <ul>
          <li>Floating window option (stays on top)</li>
          <li>Keyboard navigation</li>
          <li>VoiceOver accessibility</li>
          <li>Command shortcuts</li>
          <li>Error feedback for invalid inputs</li>
          <li>Copy results to clipboard</li>
          <li>Index from 0 or 1 option for binary view</li>
        </ul>

        <h3>Keyboard Shortcuts</h3>
        <ul>
          <li>No keyboard shortcuts currently exist yet, though they are planned.</li>
        </ul>

        <h3>Common Questions</h3>
        <div>
          <b>Q: What number bases does Numbase support?</b>
          <p>A: Numbase supports decimal (base 10), binary (base 2), hexadecimal (base 16), and octal (base 8) number systems.</p>
        </div>
        <div>
          <b>Q: How do I use the floating window feature?</b>
          <p>A: Click the "Floating Window" toggle in the top-right corner of any section. This will keep Numbase visible above other windows, making it easy to reference while working in other apps.</p>
        </div>
        <div>
          <b>Q: What's the maximum number size Numbase can handle?</b>
          <p>A: Numbase supports numbers up to 128 bits, making it suitable for most development needs.</p>
        </div>
        <div>
          <b>Q: How do I copy results?</b>
          <p>A: Each section has a copy button (📄) next to the result. Click it to copy the value to your clipboard.</p>
        </div>
        <div>
          <b>Q: Can I use keyboard shortcuts?</b>
          <p>A: While keyboard shortcuts are not yet supported, Numbase does support full keyboard navigation by using Tab to move between controls.</p>
        </div>
        <div>
          <b>Q: What does "Index from 1" do in the binary view?</b>
          <p>A: This option changes how bits are numbered. When enabled, bits are numbered starting from 1 instead of 0, which can be helpful depending on your preference or documentation requirements.</p>
        </div>
        <div>
          <b>Q: Why do I see two decimal representations in binary mode?</b>
          <p>A: The binary view shows both unsigned and signed decimal representations. The signed representation treats the leftmost bit as a sign bit, useful when working with signed integers.</p>
        </div>
        <div>
          <b>Q: How do I report a bug or suggest a feature?</b>
          <p>A: You can contact me at <a href="mailto:jordan.c4922@gmail.com">jordan.c4922@gmail.com</a> with any issues or suggestions.</p>
        </div>

        <h3>Getting Help</h3>
        <h5>Having issues with Numbase? You can:</h5>
        <ul>
          <li>Email support: <a href='mailto:jordan.c4922@gmail.com'>jordan.c4922@gmail.com</a></li>
          <li>Report issues: Use the email above, include the word 'bug' in the subject and provide the app version and how to reproduce the issue in the email body.</li>
          <li>Submit feedback: Use the email above, include the word 'feedback' in the subject and explain the feature/improvement you would like to see in the email body.</li>
        </ul>

        <h3>Version History</h3>
        <p>Current Version: 1.0</p>
        <ul>
          <li>Initial release</li>
        </ul>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
