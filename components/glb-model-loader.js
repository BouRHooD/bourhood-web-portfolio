import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DGLModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)
DGLModelSpinner.displayName = '_DGLModelSpinner';

export const DGLModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="galax_tea"
    m="auto"
    mt={['-20px', '-60px', '-55px']}
    mb={['-40px', '-140px', '-215px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))
DGLModelContainer.displayName = '_DGLModelContainer';

const Loader = () => {
  return (
    <DGLModelContainer>
      <DGLModelSpinner />
    </DGLModelContainer>
  )
}
Loader.displayName = '_LoaderGLB';

export default Loader
