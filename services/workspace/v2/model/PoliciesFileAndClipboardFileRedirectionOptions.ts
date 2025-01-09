import { PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions } from './PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions';
import { PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions } from './PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions';
import { PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions } from './PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions';


export class PoliciesFileAndClipboardFileRedirectionOptions {
    private 'fluid_control_switch_enable'?: boolean;
    private 'fluid_control_options'?: PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions;
    private 'compression_switch_enable'?: boolean;
    private 'compression_switch_options'?: PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions;
    private 'linux_file_size_supported_enable'?: boolean;
    private 'linux_file_size_supported_options'?: PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions;
    private 'linux_root_mount_switch_enable'?: boolean;
    private 'linux_root_dir_list'?: string;
    private 'linux_file_mount_path'?: string;
    private 'linux_fixed_drive_file_system_format'?: string;
    private 'linux_removable_drive_file_system_format'?: string;
    private 'linux_cdrom_drive_file_system_format'?: string;
    private 'linux_network_drive_file_system_format'?: string;
    private 'path_separator'?: string;
    private 'fixed_drive_enable'?: boolean;
    private 'removable_drive_enable'?: boolean;
    private 'cd_rom_drive_enable'?: boolean;
    private 'network_drive_enable'?: boolean;
    public constructor() { 
    }
    public withFluidControlSwitchEnable(fluidControlSwitchEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['fluid_control_switch_enable'] = fluidControlSwitchEnable;
        return this;
    }
    public set fluidControlSwitchEnable(fluidControlSwitchEnable: boolean  | undefined) {
        this['fluid_control_switch_enable'] = fluidControlSwitchEnable;
    }
    public get fluidControlSwitchEnable(): boolean | undefined {
        return this['fluid_control_switch_enable'];
    }
    public withFluidControlOptions(fluidControlOptions: PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions): PoliciesFileAndClipboardFileRedirectionOptions {
        this['fluid_control_options'] = fluidControlOptions;
        return this;
    }
    public set fluidControlOptions(fluidControlOptions: PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions  | undefined) {
        this['fluid_control_options'] = fluidControlOptions;
    }
    public get fluidControlOptions(): PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions | undefined {
        return this['fluid_control_options'];
    }
    public withCompressionSwitchEnable(compressionSwitchEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['compression_switch_enable'] = compressionSwitchEnable;
        return this;
    }
    public set compressionSwitchEnable(compressionSwitchEnable: boolean  | undefined) {
        this['compression_switch_enable'] = compressionSwitchEnable;
    }
    public get compressionSwitchEnable(): boolean | undefined {
        return this['compression_switch_enable'];
    }
    public withCompressionSwitchOptions(compressionSwitchOptions: PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions): PoliciesFileAndClipboardFileRedirectionOptions {
        this['compression_switch_options'] = compressionSwitchOptions;
        return this;
    }
    public set compressionSwitchOptions(compressionSwitchOptions: PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions  | undefined) {
        this['compression_switch_options'] = compressionSwitchOptions;
    }
    public get compressionSwitchOptions(): PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions | undefined {
        return this['compression_switch_options'];
    }
    public withLinuxFileSizeSupportedEnable(linuxFileSizeSupportedEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_file_size_supported_enable'] = linuxFileSizeSupportedEnable;
        return this;
    }
    public set linuxFileSizeSupportedEnable(linuxFileSizeSupportedEnable: boolean  | undefined) {
        this['linux_file_size_supported_enable'] = linuxFileSizeSupportedEnable;
    }
    public get linuxFileSizeSupportedEnable(): boolean | undefined {
        return this['linux_file_size_supported_enable'];
    }
    public withLinuxFileSizeSupportedOptions(linuxFileSizeSupportedOptions: PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_file_size_supported_options'] = linuxFileSizeSupportedOptions;
        return this;
    }
    public set linuxFileSizeSupportedOptions(linuxFileSizeSupportedOptions: PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions  | undefined) {
        this['linux_file_size_supported_options'] = linuxFileSizeSupportedOptions;
    }
    public get linuxFileSizeSupportedOptions(): PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions | undefined {
        return this['linux_file_size_supported_options'];
    }
    public withLinuxRootMountSwitchEnable(linuxRootMountSwitchEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_root_mount_switch_enable'] = linuxRootMountSwitchEnable;
        return this;
    }
    public set linuxRootMountSwitchEnable(linuxRootMountSwitchEnable: boolean  | undefined) {
        this['linux_root_mount_switch_enable'] = linuxRootMountSwitchEnable;
    }
    public get linuxRootMountSwitchEnable(): boolean | undefined {
        return this['linux_root_mount_switch_enable'];
    }
    public withLinuxRootDirList(linuxRootDirList: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_root_dir_list'] = linuxRootDirList;
        return this;
    }
    public set linuxRootDirList(linuxRootDirList: string  | undefined) {
        this['linux_root_dir_list'] = linuxRootDirList;
    }
    public get linuxRootDirList(): string | undefined {
        return this['linux_root_dir_list'];
    }
    public withLinuxFileMountPath(linuxFileMountPath: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_file_mount_path'] = linuxFileMountPath;
        return this;
    }
    public set linuxFileMountPath(linuxFileMountPath: string  | undefined) {
        this['linux_file_mount_path'] = linuxFileMountPath;
    }
    public get linuxFileMountPath(): string | undefined {
        return this['linux_file_mount_path'];
    }
    public withLinuxFixedDriveFileSystemFormat(linuxFixedDriveFileSystemFormat: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_fixed_drive_file_system_format'] = linuxFixedDriveFileSystemFormat;
        return this;
    }
    public set linuxFixedDriveFileSystemFormat(linuxFixedDriveFileSystemFormat: string  | undefined) {
        this['linux_fixed_drive_file_system_format'] = linuxFixedDriveFileSystemFormat;
    }
    public get linuxFixedDriveFileSystemFormat(): string | undefined {
        return this['linux_fixed_drive_file_system_format'];
    }
    public withLinuxRemovableDriveFileSystemFormat(linuxRemovableDriveFileSystemFormat: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_removable_drive_file_system_format'] = linuxRemovableDriveFileSystemFormat;
        return this;
    }
    public set linuxRemovableDriveFileSystemFormat(linuxRemovableDriveFileSystemFormat: string  | undefined) {
        this['linux_removable_drive_file_system_format'] = linuxRemovableDriveFileSystemFormat;
    }
    public get linuxRemovableDriveFileSystemFormat(): string | undefined {
        return this['linux_removable_drive_file_system_format'];
    }
    public withLinuxCdromDriveFileSystemFormat(linuxCdromDriveFileSystemFormat: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_cdrom_drive_file_system_format'] = linuxCdromDriveFileSystemFormat;
        return this;
    }
    public set linuxCdromDriveFileSystemFormat(linuxCdromDriveFileSystemFormat: string  | undefined) {
        this['linux_cdrom_drive_file_system_format'] = linuxCdromDriveFileSystemFormat;
    }
    public get linuxCdromDriveFileSystemFormat(): string | undefined {
        return this['linux_cdrom_drive_file_system_format'];
    }
    public withLinuxNetworkDriveFileSystemFormat(linuxNetworkDriveFileSystemFormat: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['linux_network_drive_file_system_format'] = linuxNetworkDriveFileSystemFormat;
        return this;
    }
    public set linuxNetworkDriveFileSystemFormat(linuxNetworkDriveFileSystemFormat: string  | undefined) {
        this['linux_network_drive_file_system_format'] = linuxNetworkDriveFileSystemFormat;
    }
    public get linuxNetworkDriveFileSystemFormat(): string | undefined {
        return this['linux_network_drive_file_system_format'];
    }
    public withPathSeparator(pathSeparator: string): PoliciesFileAndClipboardFileRedirectionOptions {
        this['path_separator'] = pathSeparator;
        return this;
    }
    public set pathSeparator(pathSeparator: string  | undefined) {
        this['path_separator'] = pathSeparator;
    }
    public get pathSeparator(): string | undefined {
        return this['path_separator'];
    }
    public withFixedDriveEnable(fixedDriveEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['fixed_drive_enable'] = fixedDriveEnable;
        return this;
    }
    public set fixedDriveEnable(fixedDriveEnable: boolean  | undefined) {
        this['fixed_drive_enable'] = fixedDriveEnable;
    }
    public get fixedDriveEnable(): boolean | undefined {
        return this['fixed_drive_enable'];
    }
    public withRemovableDriveEnable(removableDriveEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['removable_drive_enable'] = removableDriveEnable;
        return this;
    }
    public set removableDriveEnable(removableDriveEnable: boolean  | undefined) {
        this['removable_drive_enable'] = removableDriveEnable;
    }
    public get removableDriveEnable(): boolean | undefined {
        return this['removable_drive_enable'];
    }
    public withCdRomDriveEnable(cdRomDriveEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['cd_rom_drive_enable'] = cdRomDriveEnable;
        return this;
    }
    public set cdRomDriveEnable(cdRomDriveEnable: boolean  | undefined) {
        this['cd_rom_drive_enable'] = cdRomDriveEnable;
    }
    public get cdRomDriveEnable(): boolean | undefined {
        return this['cd_rom_drive_enable'];
    }
    public withNetworkDriveEnable(networkDriveEnable: boolean): PoliciesFileAndClipboardFileRedirectionOptions {
        this['network_drive_enable'] = networkDriveEnable;
        return this;
    }
    public set networkDriveEnable(networkDriveEnable: boolean  | undefined) {
        this['network_drive_enable'] = networkDriveEnable;
    }
    public get networkDriveEnable(): boolean | undefined {
        return this['network_drive_enable'];
    }
}