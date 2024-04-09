import Divider from '@mui/material/Divider';

export default function DividerStyle({children,textAlign}) {
  return (
    <Divider 
    sx={{
        '&::before, &::after':{
            display: 'block',
            borderTop: '2px solid #6c58a3' 
        }
    }}
   textAlign="center"
>
{children}
        </Divider>
  );
}
