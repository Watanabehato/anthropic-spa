/** 全局共享类型定义 */

export interface NavLink {
  label: string;
  href: string;
}

export type ButtonVariant = 'primary' | 'secondary';

export interface CTAButton {
  label: string;
  href: string;
  variant: ButtonVariant;
}

export interface HeroContent {
  /** 大标题按片段拆分，允许对个别词应用斜体等强调样式 */
  headlineSegments: ReadonlyArray<{ text: string; emphasized?: boolean }>;
  subheadline: string;
  actions: ReadonlyArray<CTAButton>;
}

export type ModelTier = 'FAST' | 'BALANCED' | 'FRONTIER';

export interface ModelCardData {
  name: string;
  tier: ModelTier;
  tagline: string;
  description: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: ReadonlyArray<NavLink>;
}
