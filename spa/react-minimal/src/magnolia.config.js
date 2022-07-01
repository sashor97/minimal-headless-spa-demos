import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Headline from './components/Headline';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import Expander from './components/Expander';
import List from './components/List';
import Item from './components/Item';
import Personalization from './pages/Personalization';
import ImageGallerySlider from './components/ImageGallerySlider';


const config = {
    'componentMappings':{
        'react-minimal-lm:pages/basic': Basic,
        'react-minimal-lm:pages/contact': Contact,
        'react-minimal-lm:pages/personalization': Personalization,
    
        'spa-lm:components/headline': Headline,
        'spa-lm:components/image': Image,
        'spa-lm:components/paragraph': Paragraph,
        'spa-lm:components/expander': Expander,
        'spa-lm:components/list': List,
        'spa-lm:components/listItem': Item,
        'spa-lm:components/imageGallerySlider': ImageGallerySlider

    }
};

export default config;
