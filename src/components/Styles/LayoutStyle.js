import { Container } from '@mui/material';

export default function LayoutStyle({children,id}) {
  return (
    <div
    id= {id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom:'30px',
        marginTop:'30px',
      }}
    >
      <Container>
      {children}
      </Container>
    </div>
  );
}
