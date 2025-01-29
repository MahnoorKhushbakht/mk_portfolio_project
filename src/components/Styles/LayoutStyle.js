import { Container } from '@mui/material';

export default function LayoutStyle({children,id}) {
  return (
    <div
    id= {id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom:'50px',
        height:'500px'
      }}
    >
      <Container>
      {children}
      </Container>
    </div>
  );
}
