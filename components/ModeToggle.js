import {useColorMode, Button} from '@chakra-ui/react'
import {SunIcon} from '@chakra-ui/icons'
const ModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Button onClick={toggleColorMode}>
            dark mode
        </Button>
    )
}

export default ModeToggle;