import styled from 'styled-components'

enum mainMap {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
}

enum crossMap {
  top = 'flex-start',
  center = 'center',
  bottom = 'flex-end',
}

const FlexBox = styled.div`
  justify-content: ${(props: MyLayout.FlexProps) =>
    props.m ? mainMap[props.m] : 'flex-start'};
  align-items: ${(props: MyLayout.FlexProps) =>
    props.c ? crossMap[props.c] : 'center'};
`

export const Row = styled(FlexBox)`
  display: flex;
  flex-direction: row;
`

export const Col = styled(FlexBox)`
  display: flex;
  flex-direction: row;
`
