import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";

import Layout from "../../components/Layout";
import PageHero from "../../components/PageHero";
import { relative } from "upath";

export default class MandirPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <PageHero
            imagePath="/img/Parallax_01.jpg"
            heading="श्री अंजनीलाल मंदिर धाम की शोभा बढ़ाते है यह तीन भव्य मंदिर"
          />
        </div>
        <section class="service-section">
          <div class="content-Holder">
            <div class="service-Main service-Card">
              <div class="card-Content">
                <img class="service-Img" src="./img/Slide_01_Ram_Mandir.jpg" />
                <Header as="h2">
                  <span>श्री राम मंदिर</span>
                </Header>
                <p>
                  श्री अंजनीलाल जी के मंदिर के ठीक सामने ट्रस्ट द्वारा एक भव्य
                  विशाल एवं दर्शनीय मंदिर का निर्माण कराया गया है। जिसमे भगवान
                  श्री राम जी, माता जानकी, श्री लक्ष्मण जी एवं श्री अंजनीलाल जी
                  के साथ विराजमान है। मंदिर की आकृति एक भव्य राज महल के समान है
                  जिसके बाहर एवं अन्दर श्वेत मकराना संगमरमर लगाया गया है। जिसमे
                  कि गई सुन्दर नक्काशी, जालियां, विशाल परदे एवं फानूस मंदिर को
                  आकर्षक रूप प्रदान करते है। भगवान की प्रतिमाएं मनमोहक है। इनके
                  दर्शनों से मन को एक आलौकिक आनंद एवं शांति प्राप्त होती है तथा
                  समस्त संकटो का हरण एवं मनोकामनाओं की पूर्ति होती है।...
                </p>
                <div class="card-Buttons">
                  <a
                    class="cfa-Button cfa-Button-G"
                    href="/blog/2015-04-15-rammandir/"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content-Holder">
            <div class="service-Main service-Card">
              <div class="card-Content">
                <img class="service-Img" src="./img/Slide_02_Naya_Mandir.jpg" />
                <Header as="h2">
                  <span>श्री अंजनीलाल मंदिर</span>
                </Header>
                <p>
                  भगवान श्री अंजनीलाल जी की प्रतिमा जंगल के मध्य एक चबूतरें पर
                  सेकड़ों वर्षों से विराजमान थी। भगवान की प्रेरणा से करीब 45 वर्ष
                  पूर्व नगर के कुछ युवक वहां घूमने जाने लगें। भगवान श्री
                  अंजनीलाल जी की प्रेरणा से एक दिन उनके मन में आया की भगवान की
                  प्रतिमा पर गर्मी में धूप एवम् धूल, वर्षा ऋतू में जल की फुहारे
                  पड़ती है तो क्यों न इस चबूतरे पर एक छोटा सा टिन शेड बना दिया
                  जाय तभी अनुमानित व्यय का बजट बनाया गया। बजट बना मात्र ₹1500 का
                  उन दिनों यह राशि भी बडी होती थी। क्योकि उस समय...
                </p>
                <div class="card-Buttons">
                  <a
                    class="cfa-Button cfa-Button-G"
                    href="/blog/2015-04-15-anjanilalmandir/"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content-Holder">
            <div class="service-Main service-Card">
              <div class="card-Content">
                <img class="service-Img" src="./img/Slide_04_Shiv_Mandir.jpg" />
                <Header as="h2">
                  <span>श्री व्दादशज्योतिर्लिगेश्वर महादेव मंदिर</span>
                </Header>
                <p>
                  भगवान अंजनी लाल जी के मन्दिर के निर्माण के बाद भगवान श्री
                  अंजनी लाल जी ने मन्दिर परिसर मे एक शिवालय निर्माण की प्रेरणा
                  दी । समिति सदस्यों ने विचार कर निर्णय लिया कि भगवान श्री अंजनी
                  लाल जी के मन्दिर के सामने स्थित एक बडी झील के मध्य एक छोटा सा
                  जल मन्दिर (शिवालय) का निर्माण कराया जाय । निर्माण मे सबसे बड़ी
                  समस्या वो झील थी क्योकि झील आकार मे विशाल तथा बहुत गहरी थी
                  उसमे हजारो की संख्या में जहरीले साँप, बिच्छु एवम जीव जंतु थे।
                  लेकिन भगवान को शिवालय तो अन्य स्थान पर बनवाना था इसलिये
                  उन्होंने विश्व के महान धर्म सम्राट...
                </p>
                <div class="card-Buttons">
                  <a
                    class="cfa-Button cfa-Button-G"
                    href="/blog/2015-04-15-shivmandir/"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
