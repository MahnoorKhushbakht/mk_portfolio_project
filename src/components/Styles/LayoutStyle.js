import { Container } from '@mui/material';

export default function LayoutStyle({children,id}) {
  return (
    <div
    id= {id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'50px'
      }}
    >
      <Container>
      {children}
      </Container>
    </div>
  );
}
