

import { Flex } from '@chakra-ui/react'
import React from 'react'
import { paddingX } from '../../styles/styles'




const WrapperComponent = (WrappedComponent : React.FC) => {
    
    const hocComponent = ({ ...props }) => {
        return (
            <>
                <Flex
                bg="color.primary"
                paddingX={paddingX}
                justifyContent="center"
                >
                    <WrappedComponent {...props} />

                </Flex>
            </>

        )
    }

    return hocComponent;

}


export default WrapperComponent;