import { createContext, useContext, useEffect, useRef, useState } from 'react'

const phone = '+919234330613'
const whatsapp = 'https://wa.me/919234330613?text=Hello%20ZOYA%20POP%20DECORATIONS%2C%20I%20would%20like%20to%20know%20about%20your%20POP%2Ffalse%20ceiling%20work.'
const instagram = 'https://www.instagram.com/zoyapopdecor.siwan?stkn=am9uZjMyMzFubzQz&utm_source=qr'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Shyampur+Bazar%2C+Mairwa+Road%2C+Siwan%2C+Bihar+841226'
const citykartMapUrl = 'https://www.google.com/maps/search/?api=1&query=Station+Road%2C+near+Anabia+Plaza%2C+Siswan+Tola%2C+Siwan%2C+Bihar+841226'

const hindiText = {
  Home: 'होम', Services: 'सेवाएँ', 'Our Work': 'हमारा काम', About: 'हमारे बारे में', Experience: 'अनुभव', Contact: 'संपर्क',
  'Dark mode': 'डार्क मोड', 'Light mode': 'लाइट मोड', 'Switch to light mode': 'लाइट मोड पर जाएँ', 'Switch to dark mode': 'डार्क मोड पर जाएँ',
  'Call Now': 'अभी कॉल करें',
  'POP & DECORATION SPECIALISTS': 'POP और सजावट विशेषज्ञ',
  'Transforming spaces with beautiful POP & ceiling designs.': 'सुंदर POP और सीलिंग डिज़ाइनों से जगहों को बदलें।',
  'Professional POP, false ceiling, plaster, interior & exterior decoration, renovation and customized work in Siwan, Bihar.': 'सिवान, बिहार में प्रोफेशनल POP, फॉल्स सीलिंग, प्लास्टर, इंटीरियर व एक्सटीरियर सजावट, रिनोवेशन और कस्टम काम।',
  'Residential & commercial spaces': 'रिहायशी और व्यावसायिक जगहें', 'Siwan, Bihar': 'सिवान, बिहार', 'Made for your space': 'आपकी जगह के लिए', 'Thoughtful. Precise. Personal.': 'सोचा-समझा। सटीक। व्यक्तिगत।', 'SCROLL TO EXPLORE': 'देखने के लिए स्क्रॉल करें',
  'THE ZOYA APPROACH': 'ZOYA का तरीका', 'Your local POP & interior decoration': 'आपके स्थानीय POP और इंटीरियर सजावट', experts: 'विशेषज्ञ।',
  'At ZOYA POP DECORATIONS, we help homeowners and businesses in Siwan create spaces that feel considered, comfortable and beautifully finished.': 'ZOYA POP DECORATIONS में हम सिवान के घरों और व्यवसायों के लिए सोच-समझकर बनाई गई, आरामदायक और खूबसूरती से पूरी की गई जगहें तैयार करते हैं।',
  'From a clean false ceiling to a complete renovation, we listen to your requirement and shape the work around your space.': 'साफ फॉल्स सीलिंग से लेकर पूरे रिनोवेशन तक, हम आपकी ज़रूरत सुनकर काम को आपकी जगह के अनुसार तैयार करते हैं।', 'More about ZOYA': 'ZOYA के बारे में',
  'Customized designs': 'कस्टम डिज़ाइन', 'Made around your space': 'आपकी जगह के अनुसार', 'Professional finishing': 'प्रोफेशनल फिनिशिंग', 'Details that make a difference': 'बारीकियाँ जो फर्क लाएँ', 'Homes & businesses': 'घर और व्यवसाय', 'Residential and commercial work': 'रिहायशी और व्यावसायिक काम',
  'SERVICE EXAMPLES': 'सेवा के उदाहरण', 'Close image gallery': 'इमेज गैलरी बंद करें', 'Swipe or drag to browse': 'देखने के लिए स्वाइप या ड्रैग करें', 'Temporary reference imagery shown for layout preview. Replace with approved ZOYA project photographs when available.': 'लेआउट प्रीव्यू के लिए अस्थायी संदर्भ चित्र दिखाए गए हैं। उपलब्ध होने पर इन्हें ZOYA की स्वीकृत प्रोजेक्ट तस्वीरों से बदलें।',
  'WHAT WE DO': 'हम क्या करते हैं', 'Work that gives your space': 'आपकी जगह को पहचान देने वाला काम', 'character.': 'चरित्र।', 'From the first idea to the final finish, get dependable POP and decoration work tailored to your requirement. Select a service to explore its visual examples.': 'पहले विचार से अंतिम फिनिश तक, अपनी ज़रूरत के अनुसार भरोसेमंद POP और सजावट का काम पाएँ। उदाहरण देखने के लिए सेवा चुनें।', 'View': 'देखें', examples: 'के उदाहरण',
  'OUR WORK / VISUAL DIRECTION': 'हमारा काम / विज़ुअल दिशा', 'Details worth': 'ऐसी बारीकियाँ जिन्हें', 'looking up.': 'ऊपर देखकर सराहा जाए।', 'Every surface is an opportunity to bring a little more thought and beauty into your everyday.': 'हर सतह आपके रोज़मर्रा में थोड़ी और सोच और खूबसूरती जोड़ने का अवसर है।', 'Temporary reference imagery shown for layout preview. Replace with approved ZOYA project photographs in': 'लेआउट प्रीव्यू के लिए अस्थायी संदर्भ चित्र हैं। इन्हें ZOYA की स्वीकृत प्रोजेक्ट तस्वीरों से बदलें।',
  'WHY CHOOSE ZOYA': 'ZOYA क्यों चुनें', 'Good work begins with': 'अच्छा काम शुरू होता है', 'good listening.': 'ध्यान से सुनने से।', 'We keep the process clear and the communication direct, so your finished space feels like yours—not a standard solution.': 'हम प्रक्रिया को स्पष्ट और संवाद को सीधा रखते हैं, ताकि आपकी तैयार जगह आपकी लगे—कोई सामान्य समाधान नहीं।', 'CRAFTED': 'आपके लिए', 'FOR YOU': 'तैयार',
  'Customized designs for your space': 'आपकी जगह के लिए कस्टम डिज़ाइन', 'Quality finishing with close attention to detail': 'बारीकियों पर ध्यान के साथ गुणवत्तापूर्ण फिनिशिंग', 'POP and false ceiling expertise': 'POP और फॉल्स सीलिंग विशेषज्ञता', 'Interior and exterior solutions': 'इंटीरियर और एक्सटीरियर समाधान', 'Renovation and customized work': 'रिनोवेशन और कस्टम काम', 'Direct customer communication': 'ग्राहक से सीधा संवाद',
  'A LOCAL NAME TO KNOW': 'एक स्थानीय नाम जिसे जानना चाहिए', 'Built around your': 'आपकी', 'vision.': 'दृष्टि के अनुसार।', 'ZOYA POP DECORATIONS is a local POP and decoration business serving Siwan and nearby areas. We work across ceilings, plaster, interiors, exteriors and renovation to help turn an idea into a space you enjoy living or working in.': 'ZOYA POP DECORATIONS सिवान और आसपास के क्षेत्रों में सेवा देने वाला स्थानीय POP और सजावट व्यवसाय है। हम सीलिंग, प्लास्टर, इंटीरियर, एक्सटीरियर और रिनोवेशन के माध्यम से आपके विचार को ऐसी जगह में बदलने में मदद करते हैं जहाँ रहना या काम करना अच्छा लगे।', 'With proprietor': 'प्रोपराइटर', 'as your direct point of contact, discussing your requirement stays simple and personal.': 'आपके सीधे संपर्क व्यक्ति होने से आपकी ज़रूरत पर बात करना सरल और व्यक्तिगत रहता है।', 'Discuss your project': 'अपने प्रोजेक्ट पर बात करें', 'Make space': 'बेहतर जीवन के लिए', 'for better living.': 'जगह बनाएँ।', Proprietor: 'प्रोपराइटर',
  'EXPERIENCE & EXPERTISE': 'अनुभव और विशेषज्ञता', 'GLOBAL EXPERIENCE, LOCAL TRUST': 'वैश्विक अनुभव, स्थानीय भरोसा', 'Bringing international exposure together with deep local understanding to deliver dependable POP, ceiling, interior and decoration solutions.': 'अंतरराष्ट्रीय अनुभव और गहरी स्थानीय समझ को साथ लाकर भरोसेमंद POP, सीलिंग, इंटीरियर और सजावट समाधान प्रदान करना।', 'LOCAL EXPERTISE': 'स्थानीय विशेषज्ञता', 'Experience in India': 'भारत में अनुभव', 'Serving with Trust & Commitment': 'भरोसे और प्रतिबद्धता के साथ सेवा', 'Combining international exposure with strong local knowledge to understand client requirements and deliver practical, beautiful spaces.': 'ग्राहकों की ज़रूरत समझने और व्यावहारिक, खूबसूरत जगहें देने के लिए अंतरराष्ट्रीय अनुभव को मजबूत स्थानीय ज्ञान के साथ जोड़ना।', 'Bringing the best experience from around the world.': 'दुनिया भर का श्रेष्ठ अनुभव आपके लिए लाना।', 'Vision': 'दृष्टि', Trust: 'भरोसा', Service: 'सेवा', 'EXPERIENCE BUILDS TRUST': 'अनुभव भरोसा बनाता है', 'FOLLOW THE VISUAL JOURNEY': 'विज़ुअल सफर को फॉलो करें', 'ZOYA ON INSTAGRAM': 'इंस्टाग्राम पर ZOYA', 'Spaces, details and decoration work': 'जगहें, बारीकियाँ और सजावट का काम', VISIT: 'देखें',
  'Saudi Arabia': 'सऊदी अरब', 'Dubai, UAE': 'दुबई, UAE', '03 YEARS': '03 वर्ष', '02 YEARS': '02 वर्ष', '7+ YEARS': '7+ वर्ष', 'International Business Exposure': 'अंतरराष्ट्रीय बिज़नेस अनुभव', 'Professional Experience': 'प्रोफेशनल अनुभव', 'Global Work Environment': 'वैश्विक कार्य वातावरण', 'Global Market Experience': 'वैश्विक बाज़ार अनुभव', 'Customer Understanding': 'ग्राहक की समझ', 'Professional Exposure': 'प्रोफेशनल अनुभव',
  'Customer First': 'ग्राहक पहले', "Understand the customer's vision and requirements.": 'ग्राहक की दृष्टि और ज़रूरतों को समझना।', 'Quality Always': 'गुणवत्ता हमेशा', 'Focus on clean finishing and dependable workmanship.': 'साफ फिनिशिंग और भरोसेमंद कारीगरी पर ध्यान।', 'Global Perspective': 'वैश्विक दृष्टिकोण', 'International exposure with practical design understanding.': 'व्यावहारिक डिज़ाइन समझ के साथ अंतरराष्ट्रीय अनुभव।', 'Stronger Together': 'साथ मिलकर मजबूत', 'Building long-term relationships through trust and service.': 'भरोसे और सेवा से लंबे रिश्ते बनाना।',
  'HOW IT WORKS': 'यह कैसे काम करता है', 'A clear path from idea to': 'विचार से', 'finish.': 'फिनिश तक स्पष्ट रास्ता।', 'Discuss your requirement': 'अपनी ज़रूरत पर चर्चा करें', 'Choose your design': 'अपना डिज़ाइन चुनें', 'Plan & customize': 'योजना बनाएँ और कस्टम करें', 'Professional execution': 'प्रोफेशनल काम', 'Final finishing': 'अंतिम फिनिशिंग',
  "LET'S MAKE IT BEAUTIFUL": 'इसे खूबसूरत बनाते हैं', 'Planning a new ceiling': 'नई सीलिंग या', 'or interior?': 'इंटीरियर की योजना है?', "Let's discuss your idea and create a beautiful space.": 'आइए आपके विचार पर बात करें और खूबसूरत जगह बनाएँ।', 'WhatsApp Us': 'WhatsApp करें',
  'GET IN TOUCH': 'संपर्क करें', "Let's talk about your": 'आपकी', 'space.': 'जगह के बारे में बात करें।', 'Have a requirement in mind? Call, WhatsApp or visit us in Siwan to start the conversation.': 'कोई ज़रूरत है? बातचीत शुरू करने के लिए कॉल करें, WhatsApp करें या सिवान में मिलें।', 'Call / WhatsApp': 'कॉल / WhatsApp', 'Primary address': 'मुख्य पता', 'Shyampur Bazar': 'श्यामपुर बाज़ार', 'Mairwa Road, Siwan – 841226': 'मैरवा रोड, सिवान – 841226', 'PRIMARY LOCATION · TAP TO OPEN': 'मुख्य स्थान · खोलने के लिए टैप करें', 'ADDITIONAL LOCATION · TAP CARD TO OPEN MAP': 'अतिरिक्त स्थान · मैप खोलने के लिए कार्ड टैप करें', 'Station Road, Siwan': 'स्टेशन रोड, सिवान', 'Near Anabia Plaza, Siswan Tola,': 'अनाबिया प्लाज़ा के पास, सिसवन टोला,', 'Open location': 'स्थान खोलें',
  Explore: 'देखें', 'About us': 'हमारे बारे में', Reach: 'संपर्क', 'Services': 'सेवाएँ', 'Reach us': 'संपर्क करें', 'WhatsApp us': 'WhatsApp करें', 'Privacy Policy': 'प्राइवेसी पॉलिसी', Terms: 'शर्तें', CALL: 'कॉल', WHATSAPP: 'WHATSAPP',
  'POP, false ceiling and decoration work for spaces in Siwan, Bihar.': 'सिवान, बिहार में POP, फॉल्स सीलिंग और सजावट का काम।',
  'POP Ceiling': 'POP सीलिंग', 'False Ceiling': 'फॉल्स सीलिंग', 'Plaster Work': 'प्लास्टर वर्क', 'Interior Decoration': 'इंटीरियर सजावट', 'Exterior Decoration': 'एक्सटीरियर सजावट', 'Renovation Work': 'रिनोवेशन वर्क', 'Customized POP Work': 'कस्टम POP वर्क', 'TV Unit': 'TV यूनिट', PVC: 'PVC',
  'Layered ceiling detail': 'लेयर्ड सीलिंग डिटेल', 'Contemporary living space': 'समकालीन लिविंग स्पेस', 'Clean architectural lines': 'साफ वास्तुशिल्पीय रेखाएँ', 'Statement wall & ceiling': 'स्टेटमेंट वॉल और सीलिंग', 'Custom TV unit': 'कस्टम TV यूनिट', 'PVC ceiling detail': 'PVC सीलिंग डिटेल', 'POP ceiling': 'POP सीलिंग', 'Interior decoration': 'इंटीरियर सजावट', 'False ceiling': 'फॉल्स सीलिंग', 'Customized work': 'कस्टम काम', 'TV unit': 'TV यूनिट', 'PVC work': 'PVC काम',
  'Elegant ceiling forms and details that give every room a refined architectural finish.': 'सीलिंग के सुंदर आकार और बारीकियाँ जो हर कमरे को सुघड़ वास्तुशिल्पीय फिनिश देती हैं।', 'Modern false ceiling solutions for balanced lighting, comfort and a polished look.': 'संतुलित रोशनी, आराम और आकर्षक लुक के लिए आधुनिक फॉल्स सीलिंग समाधान।', 'Clean, durable plaster work prepared with care for a smooth, ready-to-finish surface.': 'साफ और टिकाऊ प्लास्टर वर्क, चिकनी और फिनिश के लिए तैयार सतह के साथ।', 'Thoughtful interior details that bring your space, style and everyday needs together.': 'सोची-समझी इंटीरियर बारीकियाँ जो आपकी जगह, स्टाइल और रोज़मर्रा की ज़रूरतों को जोड़ती हैं।', 'Distinctive exterior elements that help your property make a confident first impression.': 'अलग पहचान देने वाले एक्सटीरियर तत्व जो आपकी प्रॉपर्टी की पहली छाप मजबूत बनाते हैं।', 'Practical renovation and restoration work to refresh spaces with purpose and precision.': 'जगह को नए उद्देश्य और सटीकता के साथ बेहतर बनाने वाला व्यावहारिक रिनोवेशन और रिस्टोरेशन।', 'One-of-a-kind POP and decoration work shaped around your vision and requirements.': 'आपकी दृष्टि और ज़रूरतों के अनुसार तैयार अनोखा POP और सजावट काम।', 'Custom TV unit designs that bring storage, display and a polished focal point together.': 'कस्टम TV यूनिट डिज़ाइन जो स्टोरेज, डिस्प्ले और आकर्षक केंद्र को एक साथ लाते हैं।', 'Decorative PVC ceiling and panel solutions for a clean, modern and easy-to-maintain finish.': 'साफ, आधुनिक और आसान रखरखाव वाली फिनिश के लिए सजावटी PVC सीलिंग और पैनल समाधान।',
}

const LanguageContext = createContext(null)

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return window.localStorage.getItem('zoya-language') === 'hi' ? 'hi' : 'en' } catch { return 'en' }
  })
  const t = (text) => language === 'hi' ? (hindiText[text] || text) : text
  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
    try { window.localStorage.setItem('zoya-language', language) } catch { /* preference still applies */ }
  }, [language])
  return <LanguageContext.Provider value={{ language, t, toggleLanguage: () => setLanguage((current) => current === 'en' ? 'hi' : 'en') }}>{children}</LanguageContext.Provider>
}

function useLanguage() { return useContext(LanguageContext) }

const icons = {
  ceiling: <><path d="M3 10h18"/><path d="M5 10v8h14v-8"/><path d="M8 6h8l3 4H5l3-4Z"/><path d="M9 14h6"/></>,
  grid: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16M15 4v16"/></>,
  plaster: <><path d="m4 19 5-5"/><path d="m15 5 5-2-2 5-9 9-4-4 9-9Z"/><path d="m14 6 4 4"/></>,
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  exterior: <><path d="M4 20V8l8-5 8 5v12"/><path d="M8 20v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></>,
  refresh: <><path d="M20 11a8.1 8.1 0 0 0-14.8-4L3 10"/><path d="M3 5v5h5"/><path d="M4 13a8.1 8.1 0 0 0 14.8 4L21 14"/><path d="M21 19v-5h-5"/></>,
  spark: <><path d="m12 3-1.6 5.4L5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3Z"/><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z"/></>,
  tv: <><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></>,
  panel: <><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M9 4v16M15 4v16"/></>,
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  phone: <><path d="M21 16.6v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1Z"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  check: <><path d="m5 12 4 4L19 6"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.4 1.9 2.7 2.5l.5-.6c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.3.6-.3 1-1 1.5-1.9 1.4-3-.3-5.7-3-6.1-5.8-.1-.7.1-1.3.3-1.7Z"/></>,
  moon: <><path d="M20.7 15.2A8.7 8.7 0 0 1 8.8 3.3 8.7 8.7 0 1 0 20.7 15.2Z"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
  customer: <><circle cx="12" cy="8" r="3"/><path d="M5 20c.6-3.2 3-5 7-5s6.4 1.8 7 5"/></>,
  quality: <><path d="m12 3 2.2 2.1 3-.1.8 2.9 2.4 1.8-1.5 2.6.5 3-2.9.9-1.5 2.6-3-.9-3 1-1.5-2.6-2.9-.9.5-3-1.5-2.6 2.4-1.8.8-2.9 3 .1L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
  global: <><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5s1.1-6.2 3.3-8.5Z"/></>,
  together: <><path d="M8.5 8.5 6.8 6.8a2.5 2.5 0 0 0-3.6 3.6l3 3a2.5 2.5 0 0 0 3.6 0l1.2-1.2"/><path d="m15.5 15.5 1.7 1.7a2.5 2.5 0 0 0 3.6-3.6l-3-3a2.5 2.5 0 0 0-3.6 0L13 11.8"/><path d="m8.5 15.5 7-7"/></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></>,
}

function Icon({ name, size = 22, strokeWidth = 1.7 }) {
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Brand() {
  return <a className="brand" href="#home" aria-label="ZOYA POP DECORATIONS home">
    <span className="brand-mark"><span>Z</span></span>
    <span className="brand-copy"><strong>ZOYA</strong><small>POP DECORATIONS</small></span>
  </a>
}

function Button({ href, children, variant = 'primary', icon = true, className = '' }) {
  return <a className={`button button-${variant} ${className}`} href={href}>{children}{icon && <Icon name="arrow" size={18} />}</a>
}

const popCeilingGallery = [
  { src: 'https://i.pinimg.com/736x/3b/84/bb/3b84bbd1582affe3231e75e2d549c975.jpg', alt: 'POP false ceiling with recessed LED lighting in a living room' },
  { src: 'https://2.wlimg.com/product_images/bc-full/2021/11/7148516/pop-false-ceiling-services-1636624626-6059095.jpeg', alt: 'Layered POP false ceiling with integrated lighting' },
  { src: 'https://images.livspace-cdn.com/plain/https%3A/d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/false-ceiling-1673939851-HQ2vq/1r-fc-1674642312-JZtwn/fc-50-1674895418-grK66.jpg', alt: 'Contemporary multi-layered POP ceiling design' },
  { src: 'https://img.staticmb.com/mbcontent/images/crop/uploads/ver2/XIwvQlc61t8ZIpanz4mAnTU0BUQxvlzEPgysqArqRXQG4Q/pop-false-ceiling-design_0_1200.jpg', alt: 'Modern geometric POP ceiling with warm lighting' },
  { src: 'https://assets-news.housing.com/news/wp-content/uploads/2020/05/05165049/Check-out-these-POP-ceiling-designs-to-decorate-your-living-room-image-01.jpg', alt: 'Decorative POP ceiling with recessed lights and layered details' },
  { src: 'https://www.asenseinterior.com/assets/uploads/274e3e0d1dc783a1d943e353b2ba5eba.jpg', alt: 'White geometric POP false ceiling with integrated lights' },
  { src: 'https://assets-news.housing.com/news/wp-content/uploads/2022/07/29172958/Latest-POP-11-533x400.jpg', alt: 'Geometric POP ceiling with layered recesses and dual fans' },
  { src: 'https://popdesign.in/wp-content/uploads/2022/05/35-e1655965345116.jpg', alt: 'Multi-layered POP ceiling with warm cove lighting' },
]

const falseCeilingGallery = [
  { src: 'https://img.interiorcompany.com/interior/webproduct/rectangle-modern-single-layer-false-ceiling-design-with-spot-and-cove-lighting.png', alt: 'Bedroom with a rectangular false ceiling and cove lighting' },
  { src: 'https://i.pinimg.com/736x/f4/de/de/f4dede4bd4e9166209f23f612896317f.jpg', alt: 'Dining room with a false ceiling and central wooden panel' },
  { src: 'https://i.pinimg.com/736x/39/e7/01/39e701700447f06b72995de2fdc5983d.jpg', alt: 'Bedroom with a layered false ceiling and warm recessed lights' },
  { src: 'https://www.squareyards.com/blog/wp-content/uploads/2023/05/white_false_ceiling_design_for_bedroom.jpg', alt: 'Minimal bedroom with a geometric false ceiling design' },
  { src: 'https://img.interiorcompany.com/interior/webproduct/contemporary-single-layered-false-ceiling-design-with-pendant-cove-and-spot-lighting-img.png', alt: 'Dining area with a single-layer false ceiling and pendant light' },
  { src: 'https://img.interiorcompany.com/interior/webproduct/rectangular-single-layer-false-ceiling-design-with-spot-and-cove-lighting-img.png', alt: 'Clean rectangular false ceiling with spotlights and cove lighting' },
  { src: 'https://images.kreatecube.com/usefull/vendor/23071/Gallery/16047.jpg?tr=f-webp', alt: 'Contemporary dining area with layered false ceiling lighting' },
  { src: 'https://i.pinimg.com/736x/67/39/50/6739503208709e1e90d30954d60c6401.jpg', alt: 'Dining room with recessed LEDs and pendant ceiling lights' },
]

const plasterGallery = [
  { src: 'https://puntomarinero.com/images/diy-decorative-plaster-recommendations-instructions_1.jpg', alt: 'Warm living room with a richly textured plaster feature wall' },
  { src: 'https://images.squarespace-cdn.com/content/v1/686dd4711f1eac53aee225e1/45f7120f-ec60-4bc1-b724-f3b31c8c3b77/artistic%2Beffect%2Bwall.jpg', alt: 'Minimal living room with a handcrafted neutral plaster wall' },
  { src: 'https://www.sircapaints.com/wp-content/uploads/2022/08/marcopolo-banner.jpg', alt: 'Contemporary living room with a subtle Italian plaster finish' },
  { src: 'https://www.sanmarcoiasi.ro/wp-content/uploads/2019/02/tencuiala-decorativa-living.jpg', alt: 'Modern living room with a marbled decorative plaster wall' },
  { src: 'https://decorative.primacol.pl/wp-content/uploads/2017/06/xDepositphotos_21608395_xl.jpg.pagespeed.ic.kCx3dQ7yDS.jpg', alt: 'Bright living space with a warm textured accent wall' },
  { src: 'https://bigfoto.name/uploads/posts/2022-02/1644477174_1-bigfoto-name-p-dekorativnaya-shtukaturka-vnutri-v-interer-2.jpg', alt: 'Residential lounge with organic ridged plaster texture' },
  { src: 'https://idei.club/raznoe/uploads/posts/2022-11/1669253588_idei-club-p-belaya-fakturnaya-shtukaturka-dizain-oboi-14.jpg', alt: 'White textured plaster wall in a contemporary living room' },
  { src: 'https://www.home-studio-kejik.cz/themes/default-bootstrap/img_to_admin/sterky/designove-sterky--04.jpg', alt: 'Living room with a stone-like specialty plaster finish' },
]

const interiorGallery = [
  { src: 'https://www.tollbrothers.com/communities/12548/images/Darin-Kitchen_920.jpg', alt: 'Open-plan kitchen and dining space with a marble island' },
  { src: 'https://media.pianetadesign.it/images/2021/05/bilocale-40-mq-idee-per-sala-da-pranzo-cucina-unico-ambiente-19.jpg', alt: 'Compact apartment kitchen and dining interior with warm wood details' },
  { src: 'https://media.homeviews.com/assets/5243/4-bed-tennyson-foxglove-meadows.jpg', alt: 'Contemporary kitchen and dining area with pendant lights' },
  { src: 'https://static.wellenpark.com/Images/Homes/MattamyCorp/99833632-251007.jpg', alt: 'Modern open-concept kitchen with a warm wood dining area' },
  { src: 'https://dlqxt4mfnxo6k.cloudfront.net/stylecrafthomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9hYThiM2U5N2IxMTUyOTUxN2JlZDgzMDU4MmZjZDg3Zi5qcGVn/exact/webp/2000/1125', alt: 'Bright white kitchen and dining interior with natural wood accents' },
  { src: 'https://images.squarespace-cdn.com/content/v1/5b54e6d73c3a53487c258952/1589366631195-TZ0HOA7VT33JC5CD69PG/Renovation%2BKitchen%2BFullview%2B%28DN1816%29%2BSSO.jpg', alt: 'Refined kitchen interior with marble island and statement chandelier' },
  { src: 'https://firstwalk.com/wp-content/uploads/2017/09/16161339-150916.jpg', alt: 'Townhome kitchen and dining interior with teal accent seating' },
  { src: 'https://southernhomemagazine.com/wp-content/uploads/2020/10/Farah-Kitchen_PLEASE-CREDIT-Farah-Merhi.jpg', alt: 'Elegant kitchen and dining space with gold hardware and pastel seating' },
]

const exteriorGallery = [
  { src: 'https://i.pinimg.com/originals/43/ac/3f/43ac3fde6b1f61bf08cdd5a6d417aa69.jpg', alt: 'Modern boundary wall with wood insets and warm lighting' },
  { src: 'https://i.pinimg.com/originals/97/a3/2e/97a32e149781611baff81070b848f081.jpg', alt: 'Contemporary front boundary wall with stone and wood textures' },
  { src: 'https://www.jkcement.com/wp-content/uploads/2025/12/191.png', alt: 'Modern home exterior with geometric wall panels and uplights' },
  { src: 'https://simpolo-web.s3.ap-south-1.amazonaws.com/uploads/media/blog/Modern-Home-Boundary-Wall-Design-Ideas.png', alt: 'Textured tile and metal-slat boundary wall with landscaping' },
  { src: 'https://i.pinimg.com/originals/f6/c7/7c/f6c77c9e3654786fc9fc47e2a22790ff.png', alt: 'White residential compound wall with planters and gate' },
  { src: 'https://coohom-biz-sg-s3.coohom.com/ins/static/article/molding-wall-hero-1759647187109546300.jpg', alt: 'Boundary wall with vertical wood slats and linear exterior lights' },
  { src: 'https://probesthouse.com/wp-content/uploads/2022/10/Unique-Boundary-Wall-Design.jpg', alt: 'Contemporary boundary wall with stone finish and greenery' },
  { src: 'https://i.pinimg.com/736x/1f/5c/51/1f5c5118233d971cfd623b6ab21a803c.jpg', alt: 'Small modern house facade with decorative exterior lighting' },
]

const renovationGallery = [
  { src: 'https://nationwidebuilders.us/v1/user_uploads/69d36763b3922.jpg', alt: 'Bathroom renovation before-and-after transformation' },
  { src: 'https://images.ctfassets.net/cfuetfk4yj09/7InKf9A8RO8ZqGg7uzgvLU/2d267b043231fb212ad15abcb018ebe3/Untitled_design__77_.png', alt: 'Kitchen renovation before-and-after transformation' },
  { src: 'https://budgetplumbingcentre.com.au/wp-content/uploads/2025/09/bathroom-renovation-budget-plumbing-centre-1.png', alt: 'Modern bathroom renovation transformation' },
  { src: 'https://images.squarespace-cdn.com/content/v1/685213af6c858d04e5be32fb/5d13576b-2acc-4afe-bd18-c791d246b528/Kitchen%2BMakeover_%2BBefore%2B%26%2BAfter.webp', alt: 'Contemporary kitchen makeover before and after' },
  { src: 'https://interiorsfitout.com/wp-content/uploads/2025/10/Luxary-Bathroom-Renovation-in-dubai-3.jpg', alt: 'Luxury bathroom renovation with glass shower and floating vanity' },
  { src: 'https://ccandmike.com/wp-content/uploads/2020/04/CC-and-Mike-Modern-Navy-and-Cedar-Ranch-Style-Remodel-before-and-afters-living-room.jpg', alt: 'Living room remodel before and after' },
  { src: 'https://img.girlstalk.cc/images/media/uploads/2018/07/26/10_9TH7gYK.jpg', alt: 'Living room renovation with a new TV wall and fireplace' },
  { src: 'https://images.squarespace-cdn.com/content/v1/6489dbdf270d2f7876885a9b/1713486993411-6UN2ARW9HBHDFJ9C4W2G/before%2B%26%2Bafter.png', alt: 'Open kitchen renovation before and after' },
]

const customizedPopGallery = [
  { src: 'https://www.srivinayagainterior.in/gallerynew/3a.jpg', alt: 'Custom arched wall panels with decorative interior detailing' },
  { src: 'https://5.imimg.com/data5/BS/BL/CE/SELLER-100529282/designer-interiors-false-ceiling.jpg', alt: 'Custom POP ceiling with cutout patterns and chandelier' },
  { src: 'https://cdn.dotpe.in/longtail/store-items/1305958/V7rDBmm9.webp', alt: 'Custom 3D arch-patterned wall panels in a living room' },
  { src: 'https://media.designcafe.com/wp-content/uploads/2025/02/27084904/pop-border-design-ideas.jpg', alt: 'Decorative POP border trims around a living room ceiling' },
  { src: 'https://eishcncdesigns.com/images/Architectural-Panels.webp', alt: 'Decorative architectural panels with arched and rectangular CNC-cut details' },
  { src: 'https://hockstar.sg/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-01-17.56.52-A-realistic-image-of-a-modern-home-with-a-Plaster-of-Paris-POP-ceiling-featuring-a-unique-design-theme.-The-ceiling-includes-intricate-patterns-wit-768x439.webp', alt: 'Ornate custom POP ceiling with floral medallions and wall moulding' },
  { src: 'https://sp-ao.shortpixel.ai/client/to_auto%2Cq_glossy%2Cret_img%2Cw_1024%2Ch_900/https%3A/zinoti.com/wp-content/uploads/2024/06/Nature-Inspired-POP-Designs.png', alt: 'Nature-inspired custom POP ceiling and wall motifs' },
  { src: 'https://i.pinimg.com/originals/02/0e/0c/020e0c47fe3c3b1222f2cd45a2694a38.jpg', alt: 'Hand-carved decorative POP wall art with leaf motifs' },
]

const tvUnitGallery = [
  { src: 'https://ourbrightdays.com/img/image1_wall-cabinet-design-ideas_section-modern-tv-units.jpg', alt: 'Wood and marble TV wall unit with open display shelves' },
  { src: 'https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/11/03035019/latest-wooden-led-tv-wall-panel-design-for-living-room-1024x610.png', alt: 'Wooden and marble TV wall panel with floating storage' },
  { src: 'https://materialdepotimages.materialdepot.in/application_image/modern-living-room-with-marble-laminate-tv-unit-walnut-wood-fluted-wall-panels-and-beige-marble-floor-tiles-in-bengaluru-44949addfa.png', alt: 'Marble TV unit framed with walnut fluted panels' },
  { src: 'https://i.pinimg.com/474x/76/de/7b/76de7b42c6e5c664ee7c9b6eed1d3b45.jpg', alt: 'Luxury TV wall with marble veining and vertical shelving' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2022/7/PI/KV/OM/51434946/tv-panel-wall-unit.jpg', alt: 'Marble and wood TV wall unit with illuminated shelves' },
  { src: 'https://i.pinimg.com/originals/22/64/9c/22649cf3d7ac74048d92334422f9565c.jpg', alt: 'Italian marble TV wall with wood-panel framing' },
  { src: 'https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/ai-1729763281-QQglY/tv-unit-1732781616-jMX3j/nithyasrinath-97261-designing-a-tv-unit-for-the-living-room-usi-70833205-1604-4080-b9e2-fe277d6eadc8-1732781633-rngE1.png', alt: 'Lavender marble-effect TV unit with fluted wood panel' },
  { src: 'https://materialdepotimages.materialdepot.in/application_image/modern-living-room-with-white-marble-laminate-tv-unit-walnut-wood-fluted-wall-panels-and-beige-marble-floor-tiles-in-bengaluru-df5a16ee38.png', alt: 'White marble TV unit framed with warm walnut fluted panels' },
]

const pvcGallery = [
  { src: 'https://i.pinimg.com/1200x/e8/41/18/e84118ce68f7dd08b1eebba17bb0c3b2.jpg', alt: 'PVC ceiling with circular patterns and wood inserts' },
  { src: 'https://image.made-in-china.com/202f0j00agFRQuNtuzrS/3D-Wall-Panel-Craters-Design-for-Home-Decoration.webp', alt: 'White geometric 3D PVC wall panels in a modern living room' },
  { src: 'https://modularkitchensalem.com/uploads/tenant/RIYAMODULARKITCHEN/pvc-wall-panel-design.jpg', alt: 'PVC wall panels with a marble TV unit and floating shelves' },
  { src: 'https://image.jimcdn.com/app/cms/image/transf/none/path/se753bd9c3944d569/image/i0ee53dc0d7297428/version/1513962549/image.jpg', alt: 'Luxury geometric 3D PVC ceiling with chandelier lighting' },
  { src: 'https://i.pinimg.com/736x/4a/f3/b0/4af3b096a1e0fd6a1580c13cf377fd5c.jpg', alt: 'PVC ceiling with square lights, accent walls and illuminated niches' },
  { src: 'https://jk-fab.localo.site/cdn-cgi/image/compression%3Dfast%2Cdpr%3D1%2Cwidth%3D1080/https%3A/lh3.googleusercontent.com/PHX-XOevfYosUcfOMIo_lTKENOCGZCrHu872-UUbvpzr0-AU5sDk3bGialqmHgKZDo0KdBp1n3UqX2GOyg%3Ds0', alt: '3D PVC wall panels with a blue accent strip and TV wall' },
  { src: 'https://i.pinimg.com/originals/51/f7/37/51f737e6e8c8f46b2407a0627ecb7aaa.jpg', alt: 'PVC ceiling with parallel panels, wood trim and integrated LED lighting' },
  { src: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/20230620103008-cc498803-3a64-48e9-a6fe-eaa359a160e1.jpg', alt: 'Wood-effect PVC ceiling with recessed tray lighting' },
]

const services = [
  { icon: 'ceiling', title: 'POP Ceiling', text: 'Elegant ceiling forms and details that give every room a refined architectural finish.', gallery: popCeilingGallery, galleryStart: 0 },
  { icon: 'grid', title: 'False Ceiling', text: 'Modern false ceiling solutions for balanced lighting, comfort and a polished look.', gallery: falseCeilingGallery, galleryStart: 2 },
  { icon: 'plaster', title: 'Plaster Work', text: 'Clean, durable plaster work prepared with care for a smooth, ready-to-finish surface.', gallery: plasterGallery, galleryStart: 4 },
  { icon: 'home', title: 'Interior Decoration', text: 'Thoughtful interior details that bring your space, style and everyday needs together.', gallery: interiorGallery, galleryStart: 6 },
  { icon: 'exterior', title: 'Exterior Decoration', text: 'Distinctive exterior elements that help your property make a confident first impression.', gallery: exteriorGallery, galleryStart: 8 },
  { icon: 'refresh', title: 'Renovation Work', text: 'Practical renovation and restoration work to refresh spaces with purpose and precision.', gallery: renovationGallery, galleryStart: 10 },
  { icon: 'spark', title: 'Customized POP Work', text: 'One-of-a-kind POP and decoration work shaped around your vision and requirements.', gallery: customizedPopGallery, galleryStart: 12 },
  { icon: 'tv', title: 'TV Unit', text: 'Custom TV unit designs that bring storage, display and a polished focal point together.', gallery: tvUnitGallery, galleryStart: 14 },
  { icon: 'panel', title: 'PVC', text: 'Decorative PVC ceiling and panel solutions for a clean, modern and easy-to-maintain finish.', gallery: pvcGallery, galleryStart: 16 },
]

const galleryPool = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  'https://images.unsplash.com/photo-1618220179428-22790b461013',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
  'https://images.unsplash.com/photo-1600566753051-9c7f6f0d7d3d',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
  'https://images.unsplash.com/photo-1618220179428-22790b461013',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
]

function getServiceGallery(service) {
  if (service.gallery) return service.gallery
  return Array.from({ length: 8 }, (_, index) => {
    const source = galleryPool[(service.galleryStart + index) % galleryPool.length]
    return {
      src: `${source}?auto=format&fit=crop&w=1600&q=90`,
      alt: `Temporary ${service.title} reference image ${index + 1}`,
    }
  })
}

const projects = [
  { title: 'Layered ceiling detail', category: 'POP ceiling', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=82', alt: 'Modern living room with a detailed layered ceiling' },
  { title: 'Contemporary living space', category: 'Interior decoration', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82', alt: 'Warm contemporary interior with ceiling lighting' },
  { title: 'Clean architectural lines', category: 'False ceiling', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82', alt: 'Bright refined interior with modern architectural details' },
  { title: 'Statement wall & ceiling', category: 'Customized work', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82', alt: 'Elegant decorated room with a statement ceiling and wall' },
  { id: 'project-tv-unit', title: 'Custom TV unit', category: 'TV unit', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=82', alt: 'Contemporary interior used as a temporary TV unit reference' },
  { id: 'project-pvc', title: 'PVC ceiling detail', category: 'PVC work', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82', alt: 'Decorative interior used as a temporary PVC work reference' },
]

function Header({ isDark, onToggleTheme }) {
  const { language, t, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  const close = () => setOpen(false)
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-wrap">
      <Brand />
      <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
        <a href="#home" onClick={close}>{t('Home')}</a>
        <a href="#services" onClick={close}>{t('Services')}</a>
        <a href="#work" onClick={close}>{t('Our Work')}</a>
        <a href="#about" onClick={close}>{t('About')}</a>
        <a href="#experience" onClick={close}>{t('Experience')}</a>
        <a href="#contact" onClick={close}>{t('Contact')}</a>
        <button className="language-toggle" type="button" onClick={toggleLanguage} aria-pressed={language === 'hi'} aria-label={language === 'hi' ? 'Switch to English' : 'हिंदी में पढ़ें'} title={language === 'hi' ? 'Switch to English' : 'हिंदी में पढ़ें'}><span>{language === 'hi' ? 'EN' : 'हिंदी'}</span></button>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-pressed={isDark} aria-label={isDark ? t('Switch to light mode') : t('Switch to dark mode')} title={isDark ? t('Switch to light mode') : t('Switch to dark mode')}><Icon name={isDark ? 'sun' : 'moon'} size={17} /><span>{isDark ? t('Light mode') : t('Dark mode')}</span></button>
        <Button href={`tel:${phone}`} variant="nav">{t('Call Now')}</Button>
      </nav>
    </div>
  </header>
}

function Hero() {
  const { t } = useLanguage()
  return <section className="hero" id="home">
    <div className="hero-shape hero-shape-one" /><div className="hero-shape hero-shape-two" />
    <div className="container hero-grid">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span /> {t('POP & DECORATION SPECIALISTS')} <span /></p>
        <h1>{t('Transforming spaces with beautiful POP & ceiling designs.')}</h1>
        <p className="hero-intro">{t('Professional POP, false ceiling, plaster, interior & exterior decoration, renovation and customized work in Siwan, Bihar.')}</p>
        <div className="hero-actions"><Button href={`tel:${phone}`}>{t('Call Now')}</Button><Button href={whatsapp} variant="whatsapp"><Icon name="whatsapp" size={18} /> {t('WhatsApp Us')}</Button></div>
        <div className="hero-note"><span className="note-line" /><span>{t('Residential & commercial spaces')}</span><span className="note-dot" /><span>{t('Siwan, Bihar')}</span></div>
      </div>
      <div className="hero-visual reveal reveal-right">
        <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=85" alt="Elegant modern interior with a sculptural ceiling" /></div>
        <div className="hero-badge"><span className="badge-icon"><Icon name="spark" size={20} /></span><span><strong>{t('Made for your space')}</strong><small>{t('Thoughtful. Precise. Personal.')}</small></span></div>
        <div className="hero-vertical">ZOYA / SIWAN / BIHAR</div>
      </div>
    </div>
    <div className="scroll-cue"><span /> {t('SCROLL TO EXPLORE')}</div>
  </section>
}

function Intro() {
  const { t } = useLanguage()
  return <section className="intro section-pad" id="intro"><div className="container intro-grid">
    <div className="intro-heading reveal"><p className="eyebrow">{t('THE ZOYA APPROACH')}</p><h2>{t('Your local POP & interior decoration')} <em>{t('experts.')}</em></h2></div>
    <div className="intro-copy reveal reveal-delay-1"><p>{t('At ZOYA POP DECORATIONS, we help homeowners and businesses in Siwan create spaces that feel considered, comfortable and beautifully finished.')}</p><p>{t('From a clean false ceiling to a complete renovation, we listen to your requirement and shape the work around your space.')}</p><a className="text-link" href="#about">{t('More about ZOYA')} <Icon name="arrow" size={17} /></a></div>
  </div><div className="container trust-strip reveal reveal-delay-2"><div><span className="trust-icon"><Icon name="spark" size={19} /></span><strong>{t('Customized designs')}</strong><small>{t('Made around your space')}</small></div><div><span className="trust-icon"><Icon name="check" size={19} /></span><strong>{t('Professional finishing')}</strong><small>{t('Details that make a difference')}</small></div><div><span className="trust-icon"><Icon name="home" size={19} /></span><strong>{t('Homes & businesses')}</strong><small>{t('Residential and commercial work')}</small></div></div></section>
}

function ServiceGallery({ service, onClose }) {
  const { t } = useLanguage()
  const gallery = getServiceGallery(service)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    document.body.classList.add('gallery-open')
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('gallery-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [gallery.length, onClose])

  const move = (amount) => setActiveIndex((current) => (current + amount + gallery.length) % gallery.length)
  const dragStart = useRef(null)
  const handlePointerDown = (event) => { dragStart.current = event.clientX; event.currentTarget.setPointerCapture?.(event.pointerId) }
  const handlePointerUp = (event) => { if (dragStart.current === null) return; const distance = event.clientX - dragStart.current; if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1); dragStart.current = null }

  return <div className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="gallery-title">
    <button className="gallery-backdrop" type="button" aria-label="Close image gallery" onClick={onClose} />
    <div className="gallery-dialog">
      <div className="gallery-header"><div><p className="eyebrow">{t('SERVICE EXAMPLES')}</p><h2 id="gallery-title">{t(service.title)}</h2></div><button className="gallery-close" type="button" onClick={onClose} aria-label={t('Close image gallery')}><Icon name="close" size={22} /></button></div>
      <div className="gallery-stage" aria-live="polite" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => { dragStart.current = null }}>
        {gallery.map((image, index) => {
          const rawDistance = (index - activeIndex + gallery.length) % gallery.length
          const distance = rawDistance > gallery.length / 2 ? rawDistance - gallery.length : rawDistance
          const visible = Math.abs(distance) <= 2
          return <button className={`gallery-slide ${distance === 0 ? 'is-current' : ''}`} type="button" key={image.src + index} onClick={() => setActiveIndex(index)} aria-label={`Show image ${index + 1} of ${gallery.length}`} aria-hidden={distance !== 0} tabIndex={distance === 0 ? 0 : -1} style={{ '--slide-x': `${distance * 82}%`, '--slide-z': `${-Math.abs(distance) * 120}px`, '--slide-rotate': `${distance * -18}deg`, '--slide-scale': distance === 0 ? 1 : 0.84 - Math.abs(distance) * 0.04, opacity: visible ? 1 - Math.abs(distance) * 0.24 : 0, zIndex: 10 - Math.abs(distance) }}><img src={image.src} alt={image.alt} /></button>
        })}
      </div>
      <div className="gallery-controls"><span><strong>{String(activeIndex + 1).padStart(2, '0')}</strong> / {String(gallery.length).padStart(2, '0')} <small>{t('Swipe or drag to browse')}</small></span></div>
      <p className="gallery-note">{t('Temporary reference imagery shown for layout preview. Replace with approved ZOYA project photographs when available.')}</p>
    </div>
  </div>
}

function Services() {
  const { t } = useLanguage()
  const [activeService, setActiveService] = useState(null)
  return <><section className="services section-pad" id="services"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">{t('WHAT WE DO')}</p><h2>{t('Work that gives your space')} <em>{t('character.')}</em></h2></div><p>{t('From the first idea to the final finish, get dependable POP and decoration work tailored to your requirement. Select a service to explore its visual examples.')}</p></div><div className="service-grid">{services.map((service, index) => { const title = t(service.title); return <button className="service-card reveal" style={{ '--stagger-delay': `${index * 65}ms` }} key={service.title} type="button" onClick={() => setActiveService({ ...service, title })} aria-label={`${t('View')} ${title} ${t('examples')}`}><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon name={service.icon} size={25} /></span><h3>{title}</h3><p>{t(service.text)}</p><span className="service-card-preview" aria-hidden="true">{getServiceGallery(service).slice(0, 3).map((image, previewIndex) => <img key={image.src} src={image.src} alt="" loading="lazy" style={{ '--preview-index': previewIndex }} />)}</span></button> })}</div></div></section>{activeService && <ServiceGallery service={activeService} onClose={() => setActiveService(null)} />}</>
}

function Work() {
  const { t } = useLanguage()
  return <section className="work section-pad" id="work"><div className="container"><div className="section-heading work-heading reveal"><div><p className="eyebrow">{t('OUR WORK / VISUAL DIRECTION')}</p><h2>{t('Details worth')} <em>{t('looking up.')}</em></h2></div><p>{t('Every surface is an opportunity to bring a little more thought and beauty into your everyday.')}</p></div><div className="project-grid">{projects.map((project, index) => <article id={project.id} className={`project-card project-${index + 1} reveal reveal-delay-${(index % 3) + 1}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div><div className="project-meta"><span>{t(project.category)}</span><h3>{t(project.title)}</h3></div></article>)}</div><p className="image-note">{t('Temporary reference imagery shown for layout preview. Replace with approved ZOYA project photographs in')} <code>public/images</code>.</p></div></section>
}

function WhyUs() {
  const { t } = useLanguage()
  const points = ['Customized designs for your space', 'Quality finishing with close attention to detail', 'POP and false ceiling expertise', 'Interior and exterior solutions', 'Renovation and customized work', 'Direct customer communication']
  return <section className="why section-pad"><div className="container why-grid"><div className="why-visual reveal"><div className="why-image"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=82" alt="Bright residential interior with refined ceiling detail" loading="lazy" /></div><span className="why-stamp">{t('CRAFTED')}<br /><b>{t('FOR YOU')}</b></span></div><div className="why-copy reveal reveal-delay-1"><p className="eyebrow">{t('WHY CHOOSE ZOYA')}</p><h2>{t('Good work begins with')} <em>{t('good listening.')}</em></h2><p>{t('We keep the process clear and the communication direct, so your finished space feels like yours—not a standard solution.')}</p><div className="check-list">{points.map((point) => <div key={point}><span><Icon name="check" size={15} /></span>{t(point)}</div>)}</div></div></div></section>
}

function About() {
  const { t } = useLanguage()
  return <section className="about section-pad" id="about"><div className="container about-grid"><div className="about-copy reveal"><p className="eyebrow">{t('A LOCAL NAME TO KNOW')}</p><h2>{t('Built around your')} <em>{t('vision.')}</em></h2><p>{t('ZOYA POP DECORATIONS is a local POP and decoration business serving Siwan and nearby areas. We work across ceilings, plaster, interiors, exteriors and renovation to help turn an idea into a space you enjoy living or working in.')}</p><p>{t('With proprietor')} <strong>Laddan Ahmad</strong> {t('as your direct point of contact, discussing your requirement stays simple and personal.')}</p><Button href={whatsapp} variant="dark">{t('Discuss your project')}</Button></div><div className="about-card reveal reveal-delay-1"><span className="about-card-mark">Z</span><p className="eyebrow">ZOYA POP DECORATIONS</p><h3>{t('Make space')}<br />{t('for better living.')}</h3><div className="about-card-footer"><span>{t('Proprietor')}</span><strong>Laddan Ahmad</strong></div></div></div></section>
}

function Experience() {
  const { t } = useLanguage()
  const internationalExperience = [
    { className: 'saudi', icon: 'global', years: '03 YEARS', place: 'Saudi Arabia', points: ['International Business Exposure', 'Professional Experience', 'Global Work Environment'] },
    { className: 'dubai', icon: 'global', years: '02 YEARS', place: 'Dubai, UAE', points: ['Global Market Experience', 'Customer Understanding', 'Professional Exposure'] },
  ]
  const values = [
    ['customer', 'Customer First', "Understand the customer's vision and requirements."],
    ['quality', 'Quality Always', 'Focus on clean finishing and dependable workmanship.'],
    ['global', 'Global Perspective', 'International exposure with practical design understanding.'],
    ['together', 'Stronger Together', 'Building long-term relationships through trust and service.'],
  ]

  return <section className="experience-section section-pad" id="experience">
    <div className="container">
      <div className="experience-shell">
        <div className="experience-portrait-column reveal">
          <div className="experience-portrait-frame">
            <img className="experience-portrait-image" src="/images/laddan-ahmad.jpg" alt="Laddan Ahmad" />
          </div>
          <div className="experience-portrait-caption">
            <h3>Laddan Ahmad</h3>
            <p>{t('Vision')} <span /> {t('Trust')} <span /> {t('Service')}</p>
            <i className="experience-line-motif" aria-hidden="true" />
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-heading reveal reveal-delay-1">
            <p className="eyebrow">{t('EXPERIENCE & EXPERTISE')}</p>
            <h2>Laddan Ahmad</h2>
            <p className="experience-subtitle">{t('GLOBAL EXPERIENCE, LOCAL TRUST')}</p>
            <p className="experience-intro">{t('Bringing international exposure together with deep local understanding to deliver dependable POP, ceiling, interior and decoration solutions.')}</p>
          </div>

          <div className="experience-international reveal reveal-delay-2">
            {internationalExperience.map((item) => <article className={`experience-place experience-place-${item.className}`} key={item.place}>
              <span className="experience-architecture experience-architecture-international" aria-hidden="true" />
              <div className={`experience-flag experience-flag-${item.className}`} aria-hidden="true"><span /></div>
              <Icon name={item.icon} size={18} strokeWidth={1.45} />
              <strong>{t(item.years)}</strong>
              <h3>{t(item.place)}</h3>
              <ul>{item.points.map((point) => <li key={point}>{t(point)}</li>)}</ul>
            </article>)}
          </div>

          <article className="experience-india reveal reveal-delay-3">
            <span className="experience-architecture experience-architecture-india" aria-hidden="true" />
            <div className="experience-india-copy">
              <p className="experience-label">{t('LOCAL EXPERTISE')}</p>
              <strong>{t('7+ YEARS')}</strong>
              <h3>{t('Experience in India')}</h3>
              <p className="experience-india-highlight">{t('Serving with Trust & Commitment')}</p>
              <p>{t('Combining international exposure with strong local knowledge to understand client requirements and deliver practical, beautiful spaces.')}</p>
            </div>
            <div className="experience-flag experience-flag-india" aria-hidden="true"><span /></div>
          </article>

          <div className="experience-statement reveal reveal-delay-3"><span>“</span><p>{t('Bringing the best experience from around the world.')}</p><span>”</span></div>

          <div className="experience-values">
            {values.map(([icon, title, text], index) => <article className="experience-value reveal" style={{ '--stagger-delay': `${index * 70}ms` }} key={title}><span className="experience-value-icon"><Icon name={icon} size={19} strokeWidth={1.45} /></span><h3>{t(title)}</h3><p>{t(text)}</p></article>)}
          </div>

          <div className="experience-footer reveal reveal-delay-2"><span>{t('EXPERIENCE BUILDS TRUST')}</span><small>ZOYA POP DECORATIONS <i /> {t('Siwan, Bihar')}</small></div>
          <a className="experience-instagram-card reveal reveal-delay-3" href={instagram} target="_blank" rel="noreferrer" aria-label="Open ZOYA POP DECORATIONS on Instagram">
            <span className="experience-instagram-mark"><Icon name="instagram" size={22} strokeWidth={1.35} /></span>
            <span className="experience-instagram-copy"><small>{t('FOLLOW THE VISUAL JOURNEY')}</small><strong>{t('ZOYA ON INSTAGRAM')}</strong><em>{t('Spaces, details and decoration work')} <Icon name="arrow" size={15} /></em></span>
            <span className="experience-instagram-action">{t('VISIT')} <Icon name="arrow" size={16} /></span>
          </a>
        </div>
      </div>
    </div>
  </section>
}

function Process() {
  const { t } = useLanguage()
  const steps = [['01', 'Discuss your requirement'], ['02', 'Choose your design'], ['03', 'Plan & customize'], ['04', 'Professional execution'], ['05', 'Final finishing']]
  return <section className="process section-pad"><div className="container"><div className="section-heading centered reveal"><p className="eyebrow">{t('HOW IT WORKS')}</p><h2>{t('A clear path from idea to')} <em>{t('finish.')}</em></h2></div><div className="process-grid">{steps.map(([number, title], index) => <div className="process-step reveal" style={{ '--stagger-delay': `${index * 100}ms` }} key={number}><span>{number}</span><div className="process-line" /><h3>{t(title)}</h3></div>)}</div></div></section>
}

function CTA() {
  const { t } = useLanguage()
  return <section className="cta"><div className="container cta-inner reveal"><div><p className="eyebrow">{t("LET'S MAKE IT BEAUTIFUL")}</p><h2>{t('Planning a new ceiling')}<br />{t('or interior?')}</h2></div><div className="cta-action"><p>{t("Let's discuss your idea and create a beautiful space.")}</p><div><Button href={`tel:${phone}`} variant="light">{t('Call Now')}</Button><Button href={whatsapp} variant="outline-light" icon={false}><Icon name="whatsapp" size={18} /> {t('WhatsApp Us')}</Button></div></div></div></section>
}

function Contact() {
  const { t } = useLanguage()
  return <section className="contact section-pad" id="contact"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">{t('GET IN TOUCH')}</p><h2>{t("Let's talk about your")} <em>{t('space.')}</em></h2></div><p>{t('Have a requirement in mind? Call, WhatsApp or visit us in Siwan to start the conversation.')}</p></div><div className="contact-grid"><div className="contact-details reveal"><div className="contact-item"><span><Icon name="phone" /></span><div><small>{t('Call / WhatsApp')}</small><a href={`tel:${phone}`}>+91 92343 30613</a></div></div><div className="contact-item"><span><Icon name="pin" /></span><div><small>{t('Primary address')}</small><address>{t('Shyampur Bazar')}, Mairwa Road,<br />{t('Siwan, Bihar')} 841226, India</address></div></div><div className="contact-item"><span><Icon name="spark" /></span><div><small>{t('Proprietor')}</small><p>Laddan Ahmad</p></div></div><div className="contact-buttons"><Button href={`tel:${phone}`}>{t('Call Now')}</Button><Button href={whatsapp} variant="whatsapp" icon={false}><Icon name="whatsapp" size={18} /> {t('WhatsApp Us')}</Button></div></div><div className="map-stack reveal reveal-delay-1"><a href={mapUrl} target="_blank" rel="noreferrer" className="map-card" aria-label={t('Open the ZOYA POP DECORATIONS primary address in Google Maps')}><div className="map-grid" /><div className="map-pin"><Icon name="pin" size={28} /></div><div className="map-label"><small>{t('PRIMARY LOCATION · TAP TO OPEN')}</small><strong>{t('Shyampur Bazar')}</strong><span>{t('Mairwa Road, Siwan – 841226')} <Icon name="arrow" size={15} /></span></div></a><a href={citykartMapUrl} target="_blank" rel="noreferrer" className="location-card" aria-label={t('Open the Station Road, near Anabia Plaza address in Google Maps')}><span className="location-card-glow" /><span className="location-card-content"><small>{t('ADDITIONAL LOCATION · TAP CARD TO OPEN MAP')}</small><h3>{t('Station Road, Siwan')}</h3><p>{t('Near Anabia Plaza, Siswan Tola,')}<br />{t('Siwan, Bihar')} 841226</p><span className="location-card-footer"><span><Icon name="pin" size={15} /> {t('Open location')}</span><strong>+91 92343 30613</strong></span></span></a></div></div></div></section>
}

function Footer() {
  const { t } = useLanguage()
  return <footer className="footer"><div className="container footer-grid"><div><Brand /><p className="footer-about">{t('POP, false ceiling and decoration work for spaces in Siwan, Bihar.')}</p></div><div><h3>{t('Explore')}</h3><a href="#services">{t('Services')}</a><a href="#work">{t('Our Work')}</a><a href="#about">{t('About us')}</a><a href="#experience">{t('Experience')}</a><a href="#contact">{t('Contact')}</a></div><div><h3>{t('Services')}</h3><a href="#services">{t('POP Ceiling')}</a><a href="#services">{t('False Ceiling')}</a><a href="#services">{t('Interior Decoration')}</a><a href="#services">{t('Renovation Work')}</a></div><div><h3>{t('Reach us')}</h3><a href={`tel:${phone}`}>+91 92343 30613</a><a href={whatsapp}>{t('WhatsApp us')}</a><address>{t('Shyampur Bazar')},<br />Mairwa Road, {t('Siwan, Bihar')}</address></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} ZOYA POP DECORATIONS. All rights reserved.</span><div><a href="#contact">{t('Privacy Policy')}</a><a href="#contact">{t('Terms')}</a></div></div></footer>
}

function MobileActions() { const { t } = useLanguage(); return <div className="mobile-actions"><a href={`tel:${phone}`}><Icon name="phone" size={18} /> {t('CALL')}</a><a href={whatsapp}><Icon name="whatsapp" size={18} /> {t('WHATSAPP')}</a></div> }

function Site() {
  useReveal()
  const [isDark, setIsDark] = useState(() => {
    try {
      return window.localStorage.getItem('zoya-theme') === 'dark'
    } catch {
      return false
    }
  })
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; return () => { document.documentElement.style.scrollBehavior = '' } }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', isDark)
    try {
      window.localStorage.setItem('zoya-theme', isDark ? 'dark' : 'light')
    } catch {
      // Theme preference is still applied when storage is unavailable.
    }
  }, [isDark])
  const schema = { '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', '@id': 'https://www.zoyapopdecorations.in/#business', name: 'ZOYA POP DECORATIONS', url: 'https://www.zoyapopdecorations.in/', telephone: '+919234330613', description: 'POP ceiling, false ceiling, plaster, interior and exterior decoration, renovation and customized POP work in Siwan, Bihar.', founder: { '@type': 'Person', name: 'Laddan Ahmad' }, address: { '@type': 'PostalAddress', streetAddress: 'Shyampur Bazar, Mairwa Road', addressLocality: 'Siwan', postalCode: '841226', addressRegion: 'Bihar', addressCountry: 'IN' }, areaServed: { '@type': 'City', name: 'Siwan' }, serviceType: services.map((service) => service.title) }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> <Header isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} /><main><Hero /><Intro /><Services /><Work /><WhyUs /><About /><Experience /><Process /><CTA /><Contact /></main><Footer /><MobileActions /></>
}

function App() { return <LanguageProvider><Site /></LanguageProvider> }

export default App
