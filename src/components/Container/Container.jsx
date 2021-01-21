import { styled } from '@material-ui/core/styles';

const Div= styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '1024px',
    margin: 'auto',
    '@media(max-width:1030px)':{
      width: '90%',
      margin: 'auto 5%',
    },
    '@media(max-width:430px)':{
      width: '98%',
      margin: 'auto 1%',    
    }
  });

  const Container = ({children}) => {
      return (
          <Div>
              {children}
          </Div>
      );
  }
  
  export default Container;
  