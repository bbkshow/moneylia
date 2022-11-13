import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AdvancePaymentIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      d="M14.403 1.333a5.192 5.192 0 0 0-3.728 1.618 5.644 5.644 0 0 0-1.552 3.887c0 .978.267 1.887.697 2.676-2.113 1.289-3.767 3.119-4.657 5.274h-.146a.552.552 0 0 1-.42-.175.6.6 0 0 1-.167-.437c0-.215.106-.386.257-.496l-1.358-1.988c-.384.279-.698.65-.915 1.083-.217.432-.33.913-.33 1.401 0 1.505 1.076 2.738 2.456 2.982-.06.429-.11.855-.11 1.3 0 3.048 1.553 5.69 3.813 7.644-.284 1.223-.142 2.527.77 3.479a3.52 3.52 0 0 0 2.53 1.086 3.52 3.52 0 0 0 2.53-1.086l.44-.459c.917.176 1.838.344 2.824.344.985 0 1.906-.168 2.823-.344l.44.459a3.52 3.52 0 0 0 2.53 1.086 3.52 3.52 0 0 0 2.53-1.086c.893-.932 1.027-2.198.77-3.403a11.134 11.134 0 0 0 2.383-2.828h2.604v-9.785H28.74c-.426-.721-.93-1.388-1.504-1.988l.66-3.784V6.226h-1.173s-2.818.049-5.207 1.912a17.684 17.684 0 0 0-1.907-.46 4.94 4.94 0 0 0 .074-.84c0-3.025-2.378-5.505-5.28-5.505Zm0 2.447c1.631 0 2.934 1.357 2.934 3.058a3.3 3.3 0 0 1-.074.611c-1.893.01-3.68.392-5.316 1.032a3.05 3.05 0 0 1-.477-1.643c0-1.7 1.302-3.058 2.933-3.058Zm10.854 5.122c.018-.005.018.004.036 0l-.44 2.789-.11.65.514.46a8.466 8.466 0 0 1 1.906 2.523l.33.687h1.577v4.893h-1.577l-.33.688c-.572 1.18-1.476 2.217-2.64 3.095l-.843.65.514.995c.279.492.228 1.098-.185 1.529a1.192 1.192 0 0 1-.393.283 1.152 1.152 0 0 1-1.33-.283l-.843-.88-.476-.458-.624.153c-.953.229-1.966.344-3.006.344a12.915 12.915 0 0 1-3.008-.344l-.622-.153-.477.459-.844.878a1.193 1.193 0 0 1-.393.284 1.152 1.152 0 0 1-1.33-.284 1.272 1.272 0 0 1-.183-1.529l.513-.993-.843-.65c-2.123-1.607-3.373-3.799-3.373-6.23 0-4.578 4.587-8.563 10.56-8.563 1.443 0 2.818.226 4.07.65l.623.23.514-.459c.838-.779 1.874-1.199 2.713-1.414Zm-.88 7.11c-.646 0-1.174.55-1.174 1.222 0 .673.528 1.223 1.174 1.223.645 0 1.173-.55 1.173-1.223 0-.672-.528-1.223-1.173-1.223Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(AdvancePaymentIcon);
