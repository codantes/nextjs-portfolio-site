import { extendTheme } from "@chakra-ui/react";
import {TextStyle as Text} from './styles/components/TextComponent'
import {LinkStyle as Link} from './styles/components/LinkComponent'
import {ButtonStyle as Button} from './styles/components/ButtonComponent'
import {GridItemStyle as GridItem} from './styles/components/GridItemComponent'

const colors = {
      primaryLight : 'rgb(221, 239, 169)',
      primaryDark : 'rgb(33, 39, 56)',
      secondaryLight : 'rgb(255, 112, 138)',
      secondaryDark : 'rgb(184, 0, 34)',
      tertiary : 'rgb(251, 139, 36)'
}

const components = {
    Text,
    Link,
    GridItem
}

const theme = extendTheme({colors, components})

export default theme;

