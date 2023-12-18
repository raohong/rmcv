import type { ActionSheetThemeConfig } from '../action-sheet';
import type { BadgeThemeConfig } from '../badge';
import type { ButtonThemeConfig } from '../button';
import type { CellGroupThemeConfig, CellThemeConfig } from '../cell';
import type { CircleThemeConfig } from '../circle';
import type { CollapseItemThemeConfig, CollapseThemeConfig } from '../collapse';
import type { CountDownThemeConfig } from '../count-down';
import type { DividerThemeConfig } from '../divider';
import type { ImageThemeConfig } from '../image';
import type { ImagePreviewThemeConfig } from '../image-preview/interface';
import type { InputThemeConfig, TextareaThemeConfig } from '../input';
import type { ColThemeConfig, RowThemeConfig } from '../layout';
import type { ListThemeConfig } from '../list';
import type { LoadingThemeConfig } from '../loading';
import type { NavBarThemeConfig } from '../nav-bar';
import type { NoticeBarThemeConfig } from '../notice-bar';
import type { OverlayThemeConfig } from '../overlay';
import type { PasswordInputThemeConfig } from '../password-input';
import type { PickerThemeConfig } from '../picker';
import type { PopoverThemeConfig } from '../popover/interface';
import type { PopupThemeConfig } from '../popup';
import type { ProgressThemeConfig } from '../progress';
import type { PullRefreshThemeConfig } from '../pull-refresh';
import type { RadioGroupThemeConfig, RadioThemeConfig } from '../radio';
import type { RateThemeConfig } from '../rate';
import type { SafeAreaThemeConfig } from '../safe-area';
import type { ShareSheetThemeConfig } from '../share-sheet';
import type { SkeletonThemeConfig } from '../skeleton';
import type { SpaceThemeConfig } from '../space';
import type { StepThemeConfig, StepsThemeConfig } from '../steps';
import type { StickyThemeConfig } from '../sticky';
import type { SwiperThemeConfig } from '../swiper';
import type { SwitchThemeConfig } from '../switch';
import type { TagThemeConfig } from '../tag';

export type ComponentsThemeConfig = ButtonThemeConfig &
  CellThemeConfig &
  CellGroupThemeConfig &
  PopupThemeConfig &
  OverlayThemeConfig &
  LoadingThemeConfig &
  SafeAreaThemeConfig &
  ImageThemeConfig &
  RowThemeConfig &
  ColThemeConfig &
  BadgeThemeConfig &
  CircleThemeConfig &
  CollapseThemeConfig &
  CollapseItemThemeConfig &
  CountDownThemeConfig &
  DividerThemeConfig &
  PullRefreshThemeConfig &
  ListThemeConfig &
  NoticeBarThemeConfig &
  PopoverThemeConfig &
  ProgressThemeConfig &
  TagThemeConfig &
  SkeletonThemeConfig &
  SwiperThemeConfig &
  StickyThemeConfig &
  RadioThemeConfig &
  RadioGroupThemeConfig &
  SpaceThemeConfig &
  RateThemeConfig &
  SwitchThemeConfig &
  PasswordInputThemeConfig &
  ShareSheetThemeConfig &
  ActionSheetThemeConfig &
  NavBarThemeConfig &
  PickerThemeConfig &
  InputThemeConfig &
  TextareaThemeConfig &
  ImagePreviewThemeConfig &
  StepThemeConfig &
  StepsThemeConfig;
