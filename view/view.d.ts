/**
 * @license CyanZone
 * (c) 2020 Cyan See https://github.com/1227233860/cyan-zone-ui
 * License: MIT
 */
export declare class __View {
  /**
   * 判断指定节点是否显示在可视区域
   * @param targetEl 目标节点
   * @param containerEl 容器节点
   */
  static inView(targetEl: Element, containerEl?: Element): boolean;
  /**
   * 判断指定节点是否溢出
   * @param el 目标节点
   */
  static isOverflow(el: Element): boolean;
}
