/**
 * 关于模块的定义方式，可以参考这个答案
 * https://stackoverflow.com/questions/37239855/how-to-write-typescript-definition-file-for-exiting-javascript?rq=1
 */

declare namespace MyLayout {
  interface BaseProps {
    style: React.CSSProperties
  }
  interface FlexProps extends BaseProps {
    /**
     * 主轴对齐方式
     *
     * @type {('start' | 'end' | 'center')}
     * @memberof FlexProps
     */
    m?: 'start' | 'end' | 'center'
    c?: 'top' | 'center' | 'bottom'
  }
  class Row extends React.Component<FlexProps, {}> {}
}

declare module 'layout' {
  export import Row = MyLayout.Row
}
