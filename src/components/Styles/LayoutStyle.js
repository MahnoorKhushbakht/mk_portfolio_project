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
        marginTop:'50px',
      }}
    >
      <Container>
      {children}
      </Container>
    </div>
  );
}
