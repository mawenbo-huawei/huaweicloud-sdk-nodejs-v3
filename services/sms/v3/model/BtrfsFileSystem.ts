import { BtrfsSubvolumn } from './BtrfsSubvolumn';


export class BtrfsFileSystem {
    public name: string;
    public label: string;
    public uuid: string;
    public device: string;
    public size: number;
    public nodesize: number;
    public sectorsize: number;
    private 'data_profile': string | undefined;
    private 'system_profile': string | undefined;
    private 'metadata_profile': string | undefined;
    private 'global_reserve1': string | undefined;
    private 'g_vol_used_size': number | undefined;
    private 'default_subvolid': string | undefined;
    private 'default_subvol_name': string | undefined;
    private 'default_subvol_mountpath': string | undefined;
    public subvolumn: Array<BtrfsSubvolumn>;
    public constructor(name?: any, label?: any, uuid?: any, device?: any, size?: any, nodesize?: any, sectorsize?: any, dataProfile?: any, systemProfile?: any, metadataProfile?: any, globalReserve1?: any, gVolUsedSize?: any, defaultSubvolid?: any, defaultSubvolName?: any, defaultSubvolMountpath?: any, subvolumn?: any) { 
        this['name'] = name;
        this['label'] = label;
        this['uuid'] = uuid;
        this['device'] = device;
        this['size'] = size;
        this['nodesize'] = nodesize;
        this['sectorsize'] = sectorsize;
        this['data_profile'] = dataProfile;
        this['system_profile'] = systemProfile;
        this['metadata_profile'] = metadataProfile;
        this['global_reserve1'] = globalReserve1;
        this['g_vol_used_size'] = gVolUsedSize;
        this['default_subvolid'] = defaultSubvolid;
        this['default_subvol_name'] = defaultSubvolName;
        this['default_subvol_mountpath'] = defaultSubvolMountpath;
        this['subvolumn'] = subvolumn;
    }
    public withName(name: string): BtrfsFileSystem {
        this['name'] = name;
        return this;
    }
    public withLabel(label: string): BtrfsFileSystem {
        this['label'] = label;
        return this;
    }
    public withUuid(uuid: string): BtrfsFileSystem {
        this['uuid'] = uuid;
        return this;
    }
    public withDevice(device: string): BtrfsFileSystem {
        this['device'] = device;
        return this;
    }
    public withSize(size: number): BtrfsFileSystem {
        this['size'] = size;
        return this;
    }
    public withNodesize(nodesize: number): BtrfsFileSystem {
        this['nodesize'] = nodesize;
        return this;
    }
    public withSectorsize(sectorsize: number): BtrfsFileSystem {
        this['sectorsize'] = sectorsize;
        return this;
    }
    public withDataProfile(dataProfile: string): BtrfsFileSystem {
        this['data_profile'] = dataProfile;
        return this;
    }
    public set dataProfile(dataProfile: string | undefined) {
        this['data_profile'] = dataProfile;
    }
    public get dataProfile() {
        return this['data_profile'];
    }
    public withSystemProfile(systemProfile: string): BtrfsFileSystem {
        this['system_profile'] = systemProfile;
        return this;
    }
    public set systemProfile(systemProfile: string | undefined) {
        this['system_profile'] = systemProfile;
    }
    public get systemProfile() {
        return this['system_profile'];
    }
    public withMetadataProfile(metadataProfile: string): BtrfsFileSystem {
        this['metadata_profile'] = metadataProfile;
        return this;
    }
    public set metadataProfile(metadataProfile: string | undefined) {
        this['metadata_profile'] = metadataProfile;
    }
    public get metadataProfile() {
        return this['metadata_profile'];
    }
    public withGlobalReserve1(globalReserve1: string): BtrfsFileSystem {
        this['global_reserve1'] = globalReserve1;
        return this;
    }
    public set globalReserve1(globalReserve1: string | undefined) {
        this['global_reserve1'] = globalReserve1;
    }
    public get globalReserve1() {
        return this['global_reserve1'];
    }
    public withGVolUsedSize(gVolUsedSize: number): BtrfsFileSystem {
        this['g_vol_used_size'] = gVolUsedSize;
        return this;
    }
    public set gVolUsedSize(gVolUsedSize: number | undefined) {
        this['g_vol_used_size'] = gVolUsedSize;
    }
    public get gVolUsedSize() {
        return this['g_vol_used_size'];
    }
    public withDefaultSubvolid(defaultSubvolid: string): BtrfsFileSystem {
        this['default_subvolid'] = defaultSubvolid;
        return this;
    }
    public set defaultSubvolid(defaultSubvolid: string | undefined) {
        this['default_subvolid'] = defaultSubvolid;
    }
    public get defaultSubvolid() {
        return this['default_subvolid'];
    }
    public withDefaultSubvolName(defaultSubvolName: string): BtrfsFileSystem {
        this['default_subvol_name'] = defaultSubvolName;
        return this;
    }
    public set defaultSubvolName(defaultSubvolName: string | undefined) {
        this['default_subvol_name'] = defaultSubvolName;
    }
    public get defaultSubvolName() {
        return this['default_subvol_name'];
    }
    public withDefaultSubvolMountpath(defaultSubvolMountpath: string): BtrfsFileSystem {
        this['default_subvol_mountpath'] = defaultSubvolMountpath;
        return this;
    }
    public set defaultSubvolMountpath(defaultSubvolMountpath: string | undefined) {
        this['default_subvol_mountpath'] = defaultSubvolMountpath;
    }
    public get defaultSubvolMountpath() {
        return this['default_subvol_mountpath'];
    }
    public withSubvolumn(subvolumn: Array<BtrfsSubvolumn>): BtrfsFileSystem {
        this['subvolumn'] = subvolumn;
        return this;
    }
}