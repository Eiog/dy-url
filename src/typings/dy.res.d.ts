declare namespace DY {
  export interface AvatarThumb {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface CoverUrl {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface ShareQrcodeUrl {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface ShareInfo {
    share_desc: string;
    share_desc_info: string;
    share_qrcode_url: ShareQrcodeUrl;
    share_title: string;
    share_title_myself: string;
    share_title_other: string;
    share_url: string;
    share_weibo_desc: string;
  }

  export interface Author {
    avatar_thumb: AvatarThumb;
    cf_list?: any;
    close_friend_type: number;
    contacts_status: number;
    contrail_list?: any;
    cover_url: CoverUrl[];
    create_time: number;
    custom_verify: string;
    data_label_list?: any;
    endorsement_info_list?: any;
    enterprise_verify_reason: string;
    favoriting_count: number;
    follow_status: number;
    follower_count: number;
    follower_list_secondary_information_struct?: any;
    follower_status: number;
    following_count: number;
    im_role_ids?: any;
    is_ad_fake: boolean;
    is_blocked_v2: boolean;
    is_blocking_v2: boolean;
    is_cf: number;
    max_follower_count: number;
    nickname: string;
    not_seen_item_id_list?: any;
    not_seen_item_id_list_v2?: any;
    offline_info_list?: any;
    personal_tag_list?: any;
    prevent_download: boolean;
    risk_notice_text: string;
    sec_uid: string;
    secret: number;
    share_info: ShareInfo;
    short_id: string;
    signature: string;
    signature_extra?: any;
    special_people_labels?: any;
    status: number;
    text_extra?: any;
    total_favorited: number;
    uid: string;
    unique_id: string;
    user_age: number;
    user_canceled: boolean;
    user_permissions?: any;
    verification_type: number;
  }

  export interface AwemeControl {
    can_comment: boolean;
    can_forward: boolean;
    can_share: boolean;
    can_show_comment: boolean;
  }

  export interface CommentPermissionInfo {
    can_comment: boolean;
    comment_permission_status: number;
    item_detail_entry: boolean;
    press_entry: boolean;
    toast_guide: boolean;
  }

  export interface DiggLottie {
    can_bomb: number;
    lottie_id: string;
  }

  export interface ImageAlbumMusicInfo {
    begin_time: number;
    end_time: number;
    volume: number;
  }

  export interface ImpressionData {
    group_id_list_a: number[];
    group_id_list_b: number[];
    group_id_list_c?: any;
    similar_id_list_a?: any;
    similar_id_list_b?: any;
  }

  export interface ItemWarnNotification {
    content: string;
    show: boolean;
    type: number;
  }

  export interface CoverColorHsv {
    h: number;
    s: number;
    v: number;
  }

  export interface CoverHd {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface CoverLarge {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface CoverMedium {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface CoverThumb {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface LunaInfo {
    has_copyright: boolean;
    is_luna_user: boolean;
  }

  export interface PlayUrl {
    height: number;
    uri: string;
    url_key: string;
    url_list: string[];
    width: number;
  }

  export interface SearchImpr {
    entity_id: string;
  }

  export interface Chorus {
    duration_ms: number;
    start_ms: number;
  }

  export interface Song {
    artists?: any;
    chorus: Chorus;
    chorus_v3_infos?: any;
    id: number;
    id_str: string;
    title: string;
  }

  export interface StrongBeatUrl {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface Music {
    album: string;
    artist_user_infos?: any;
    artists: any[];
    audition_duration: number;
    author: string;
    author_deleted: boolean;
    author_position?: any;
    binded_challenge_id: number;
    can_background_play: boolean;
    collect_stat: number;
    cover_color_hsv: CoverColorHsv;
    cover_hd: CoverHd;
    cover_large: CoverLarge;
    cover_medium: CoverMedium;
    cover_thumb: CoverThumb;
    dmv_auto_show: boolean;
    dsp_status: number;
    duration: number;
    end_time: number;
    external_song_info: any[];
    extra: string;
    id: number;
    id_str: string;
    is_audio_url_with_cookie: boolean;
    is_commerce_music: boolean;
    is_del_video: boolean;
    is_matched_metadata: boolean;
    is_original: boolean;
    is_original_sound: boolean;
    is_pgc: boolean;
    is_restricted: boolean;
    is_video_self_see: boolean;
    luna_info: LunaInfo;
    lyric_short_position?: any;
    mid: string;
    music_chart_ranks?: any;
    music_status: number;
    musician_user_infos?: any;
    mute_share: boolean;
    offline_desc: string;
    owner_handle: string;
    owner_nickname: string;
    pgc_music_type: number;
    play_url: PlayUrl;
    position?: any;
    prevent_download: boolean;
    prevent_item_download_status: number;
    preview_end_time: number;
    preview_start_time: number;
    reason_type: number;
    redirect: boolean;
    schema_url: string;
    search_impr: SearchImpr;
    shoot_duration: number;
    song: Song;
    source_platform: number;
    start_time: number;
    status: number;
    strong_beat_url: StrongBeatUrl;
    tag_list?: any;
    title: string;
    unshelve_countries?: any;
    user_count: number;
    video_duration: number;
  }

  export interface PhotoSearchEntrance {
    ecom_type: number;
  }

  export interface SearchImpr2 {
    entity_id: string;
    entity_type: string;
  }

  export interface SeriesPaidInfo {
    item_price: number;
    series_paid_status: number;
  }

  export interface ShareInfo2 {
    share_desc: string;
    share_desc_info: string;
    share_link_desc: string;
    share_url: string;
  }

  export interface ShowFollowButton {}

  export interface Statistics {
    admire_count: number;
    aweme_id: string;
    collect_count: number;
    comment_count: number;
    digg_count: number;
    play_count: number;
    share_count: number;
  }

  export interface ReviewResult {
    review_status: number;
  }

  export interface Status {
    allow_friend_recommend: boolean;
    allow_self_recommend_to_friend: boolean;
    allow_share: boolean;
    aweme_id: string;
    in_reviewing: boolean;
    is_delete: boolean;
    is_prohibited: boolean;
    listen_video_status: number;
    part_see: number;
    private_status: number;
    review_result: ReviewResult;
  }

  export interface TextExtra {
    end: number;
    hashtag_id: string;
    hashtag_name: string;
    is_commerce: boolean;
    start: number;
    type: number;
  }

  export interface BigThumb {
    duration: number;
    fext: string;
    img_num: number;
    img_url: string;
    img_x_len: number;
    img_x_size: number;
    img_y_len: number;
    img_y_size: number;
    interval: number;
    uri: string;
  }

  export interface PlayAddr {
    data_size: number;
    file_cs: string;
    file_hash: string;
    height: number;
    uri: string;
    url_key: string;
    url_list: string[];
    width: number;
  }

  export interface BitRate {
    FPS: number;
    HDR_bit: string;
    HDR_type: string;
    bit_rate: number;
    gear_name: string;
    is_bytevc1: number;
    is_h265: number;
    play_addr: PlayAddr;
    quality_type: number;
    video_extra: string;
  }

  export interface Cover {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface CoverOriginalScale {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface DynamicCover {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface OriginCover {
    height: number;
    uri: string;
    url_list: string[];
    width: number;
  }

  export interface PlayAddr2 {
    data_size: number;
    file_cs: string;
    file_hash: string;
    height: number;
    uri: string;
    url_key: string;
    url_list: string[];
    width: number;
  }

  export interface Video {
    big_thumbs: BigThumb[];
    bit_rate: BitRate[];
    cover: Cover;
    cover_original_scale: CoverOriginalScale;
    duration: number;
    dynamic_cover: DynamicCover;
    height: number;
    horizontal_type: number;
    is_h265: number;
    is_source_HDR: number;
    meta: string;
    origin_cover: OriginCover;
    play_addr: PlayAddr2;
    ratio: string;
    width: number;
  }

  export interface VideoTag {
    level: number;
    tag_id: number;
    tag_name: string;
  }

  export interface AwemeDetail {
    anchors?: any;
    author: Author;
    author_mask_tag: number;
    author_user_id: number;
    aweme_control: AwemeControl;
    aweme_id: string;
    aweme_type: number;
    challenge_position?: any;
    chapter_list?: any;
    collect_stat: number;
    collection_corner_mark: number;
    comment_gid: number;
    comment_list?: any;
    comment_permission_info: CommentPermissionInfo;
    commerce_config_data?: any;
    common_bar_info: string;
    component_info_v2: string;
    cover_labels?: any;
    create_time: number;
    desc: string;
    digg_lottie: DiggLottie;
    disable_relation_bar: number;
    dislike_dimension_list?: any;
    duet_aggregate_in_music_tab: boolean;
    duration: number;
    geofencing: any[];
    geofencing_regions?: any;
    group_id: string;
    horizontal_type: number;
    hybrid_label?: any;
    image_album_music_info: ImageAlbumMusicInfo;
    image_infos?: any;
    image_list?: any;
    images?: any;
    img_bitrate?: any;
    impression_data: ImpressionData;
    interaction_stickers?: any;
    is_ads: boolean;
    is_collects_selected: number;
    is_duet_sing: boolean;
    is_image_beat: boolean;
    is_life_item: boolean;
    is_share_post: boolean;
    is_story: number;
    is_top: number;
    item_warn_notification: ItemWarnNotification;
    label_top_text?: any;
    long_video?: any;
    music: Music;
    nickname_position?: any;
    origin_comment_ids?: any;
    origin_text_extra: any[];
    original_images?: any;
    packed_clips?: any;
    photo_search_entrance: PhotoSearchEntrance;
    position?: any;
    preview_title: string;
    preview_video_status: number;
    promotions: any[];
    rate: number;
    region: string;
    relation_labels?: any;
    search_impr: SearchImpr2;
    series_paid_info: SeriesPaidInfo;
    share_info: ShareInfo2;
    share_url: string;
    should_open_ad_report: boolean;
    show_follow_button: ShowFollowButton;
    social_tag_list?: any;
    standard_bar_info_list?: any;
    statistics: Statistics;
    status: Status;
    text_extra: TextExtra[];
    uniqid_position?: any;
    user_digged: number;
    video: Video;
    video_labels?: any;
    video_tag: VideoTag[];
    video_text: any[];
  }

  export interface LogPb {
    impr_id: string;
  }

  export interface Result {
    aweme_detail: AwemeDetail;
    log_pb: LogPb;
    status_code: number;
  }
}
