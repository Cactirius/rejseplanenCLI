export default interface Setting {
    option: number,
    action: "change" | "update" | "none",
}
export const SettingNone: Setting = {option: -1, action: "none"}