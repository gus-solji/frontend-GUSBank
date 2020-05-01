import React,{Fragment, useEffect,useState} from 'react';
import InfoContainer from '../../components/InfoContainer/InfoContainer.component';
import WaveContainer from '../../components/WaveContainer/WaveContainer.component';
import OurPurpose from '../../components/OurPurpose/OurPurposeContainer.component';
import Footer from '../../components/Footer/Footer.component';
import Navbar from '../../components/NavBar/NavBar.component';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { EXCHANGE_RATE_URL, KEY_RATE } from '../../constFile';
import Axios from 'axios';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#09BC8A',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#09BC8A',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const HomePage = () => {

    const [rate, setRate] = useState({});

    useEffect(() => {
      const getExchange = async () => {
        if(!rate) return;
        
        const url = EXCHANGE_RATE_URL;
        const result = await Axios.get(url);
        
        setRate(result.data);
        localStorage.setItem(KEY_RATE, JSON.stringify(result.data));
       
    }

      getExchange();
    },[]);


    return ( 
        <Fragment>
            <Navbar></Navbar>
            <InfoContainer></InfoContainer>
            <WaveContainer rate={rate}></WaveContainer>
            <OurPurpose></OurPurpose>
            <ThemeProvider theme={theme}>
            <ChatBot floating 
              steps={[
                {
                  id: '1',
                  message: 'Welcome to GSJ Bank!!',
                  trigger: '2',
                },
                {
                  id: '2',
                  options: [
                    { value: 1, label: 'Info about', trigger: '5' },
                    { value: 2, label: 'Products', trigger: '3' },
                    { value: 3, label: 'End', trigger: '5' },
                  ],
                },
                {
                  id: '3',
                  message: ' Accounts, Favorites Accouns, Transactions',
                  trigger: '2',
                },
                {
                  id: '4',
                  message: 'Enjoy! And join us!',
                  end: true,
                },
                {
                  id: '5',
                  message: 'We are a digital bank',
                  trigger: '2',
                }
              ]}
  />
    </ThemeProvider>
            <Footer></Footer>
    
        </Fragment>
    );
}
 
export default HomePage;