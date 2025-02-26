// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

import * as utilities from "../utilities";

/**
 * Options to specify complexity requirements and mandatory rotation periods for your IAM users' passwords.
 */
export interface AccountPasswordPolicyArgs {
    /**
     * Whether to allow users to change their own password.
     */
    allowUsersToChange: pulumi.Input<boolean>;
    /**
     * Whether users are prevented from setting a new password after their password has
     * expired (i.e. require administrator reset).
     */
    hardExpiry: pulumi.Input<boolean>;
    /**
     * The number of days that an user password is valid. If not set or a value of `0` is provided, then
     * passwords will not expire.
     */
    maxAge?: pulumi.Input<number>;
    /**
     * Minimum length to require for user passwords. Defaults to `8` if not set or
     * the provided value is invalid. Valid values are between 6 and 128.
     */
    minimumLength?: pulumi.Input<number>;
    /**
     * Whether to require lowercase characters for user passwords.
     */
    requireLowercaseCharacters: pulumi.Input<boolean>;
    /**
     * Whether to require numbers for user passwords.
     */
    requireNumbers: pulumi.Input<boolean>;
    /**
     * Whether to require symbols for user passwords.
     */
    requireSymbols: pulumi.Input<boolean>;
    /**
     * Whether to require uppercase characters for user passwords.
     */
    requireUppercaseCharacters: pulumi.Input<boolean>;
    /**
     * The number of previous passwords that users are prevented from reusing. If not set or a
     * value of `0` is provided, no reuse prevention policy will be used.
     */
    reusePrevention?: pulumi.Input<number>;
}

/**
 * The admin role.
 */
export interface AdminRoleArgs {
    /**
     * IAM role with admin access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of admin IAM role. Defaults to '/'
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for admin role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for admin role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
/**
 * adminRoleArgsProvideDefaults sets the appropriate defaults for AdminRoleArgs
 */
export function adminRoleArgsProvideDefaults(val: AdminRoleArgs): AdminRoleArgs {
    return {
        ...val,
        name: (val.name) ?? "admin",
    };
}

/**
 * The admin role.
 */
export interface AdminRoleWithMFAArgs {
    /**
     * IAM role with admin access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of admin IAM role.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for admin role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for admin role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether admin role requires MFA.
     */
    requiresMfa?: pulumi.Input<boolean>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The Amazon Managed Service for Prometheus IAM policy to the role.
 */
export interface EKSAmazonManagedServicePrometheusPolicyArgs {
    /**
     * Determines whether to attach the Amazon Managed Service for Prometheus IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * List of AMP Workspace ARNs to read and write metrics. If not provided, a default ARN of "*"
     * will be provided.
     */
    workspaceArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The Appmesh policies.
 */
export interface EKSAppmeshPolicyArgs {
    /**
     * Determines whether to attach the Appmesh Controller policy to the role.
     */
    controller?: pulumi.Input<boolean>;
    /**
     * Determines whether to attach the Appmesh envoy proxy policy to the role.
     */
    envoyProxy?: pulumi.Input<boolean>;
}

/**
 * The Cert Manager IAM policy to attach to the role.
 */
export interface EKSCertManagerPolicyArgs {
    /**
     * Determines whether to attach the Cert Manager IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * Route53 hosted zone ARNs to allow Cert manager to manage records. If not provided,
     * the default ARN "arn:aws:route53:::hostedzone/*" will be applied.
     */
    hostedZoneArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The Cluster Autoscaler IAM policy to the role.
 */
export interface EKSClusterAutoscalerPolicyArgs {
    /**
     * Determines whether to attach the Cluster Autoscaler IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * List of cluster IDs to appropriately scope permissions within the Cluster Autoscaler IAM policy.
     */
    clusterIds: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The EBS CSI IAM policy to the role.
 */
export interface EKSEBSCSIPolicyArgs {
    /**
     * Determines whether to attach the EBS CSI IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * KMS CMK IDs to allow EBS CSI to manage encrypted volumes.
     */
    kmsCmkIds: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The EFS CSI IAM policy to the role.
 */
export interface EKSEFSCSIPolicyArgs {
    /**
     * Determines whether to attach the EFS CSI IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
}

/**
 * The External DNS IAM policy to the role.
 */
export interface EKSExternalDNSPolicyArgs {
    /**
     * Determines whether to attach the External DNS IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * Route53 hosted zone ARNs to allow External DNS to manage records. If not provided,
     * the default ARN "arn:aws:route53:::hostedzone/*" will be applied.
     */
    hostedZoneArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The External Secrets policy to the role.
 */
export interface EKSExternalSecretsPolicyArgs {
    /**
     * Determines whether to attach the External Secrets policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * List of Secrets Manager ARNs that contain secrets to mount using External Secrets. If not provided, the default ARN "arn:aws:secretsmanager:*:*:secret:*" will be applied.
     */
    secretsManagerArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Systems Manager Parameter ARNs that contain secrets to mount using External Secrets. If not provided,
     * the default ARN "arn:aws:ssm:*:*:parameter/*" will be applied.
     */
    ssmParameterArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The Karpenter Controller policy to the role.
 */
export interface EKSKarpenterControllerPolicyArgs {
    /**
     * Determines whether to attach the Karpenter Controller policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * Cluster ID where the Karpenter controller is provisioned/managing.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * List of node IAM role ARNs Karpenter can use to launch nodes. If not provided,
     * the default ARN "*" will be applied.
     */
    nodeIamRoleArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of SSM Parameter ARNs that contain AMI IDs launched by Karpenter. If not provided,
     * the default ARN "arn:aws:ssm:*:*:parameter/aws/service/*" will be applied.
     */
    ssmParameterArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Account ID of where the subnets Karpenter will utilize resides. Used when subnets are shared from another account.
     */
    subnetAccountId?: pulumi.Input<string>;
    /**
     * Tag key (`{key = value}`) applied to resources launched by Karpenter through the Karpenter provisioner.
     */
    tagKey?: pulumi.Input<string>;
}
/**
 * ekskarpenterControllerPolicyArgsProvideDefaults sets the appropriate defaults for EKSKarpenterControllerPolicyArgs
 */
export function ekskarpenterControllerPolicyArgsProvideDefaults(val: EKSKarpenterControllerPolicyArgs): EKSKarpenterControllerPolicyArgs {
    return {
        ...val,
        clusterId: (val.clusterId) ?? "*",
        tagKey: (val.tagKey) ?? "karpenter.sh/discovery",
    };
}

/**
 * The Load Balancer policy.
 */
export interface EKSLoadBalancerPolicyArgs {
    /**
     * Determines whether to attach the Load Balancer Controller policy to the role.
     */
    controller?: pulumi.Input<boolean>;
    /**
     * Determines whether to attach the Load Balancer Controller policy for the TargetGroupBinding only.
     */
    targetGroupBindingOnly?: pulumi.Input<boolean>;
}

/**
 * The Node Termination Handler policy to the role.
 */
export interface EKSNodeTerminationHandlerPolicyArgs {
    /**
     * Determines whether to attach the Node Termination Handler policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * List of SQS ARNs that contain node termination events. If not provided, then a default
     * ARN of "*" will be provided.
     */
    sqsQueueArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The different policies to attach to the role.
 */
export interface EKSRolePoliciesArgs {
    /**
     * The Amazon Managed Service for Prometheus IAM policy.
     */
    amazonManagedServicePrometheus?: pulumi.Input<inputs.EKSAmazonManagedServicePrometheusPolicyArgs>;
    /**
     * The Appmesh policies.
     */
    appmesh?: pulumi.Input<inputs.EKSAppmeshPolicyArgs>;
    /**
     * The Cert Manager IAM policy.
     */
    certManager?: pulumi.Input<inputs.EKSCertManagerPolicyArgs>;
    /**
     * The Cluster Autoscaler IAM policy.
     */
    clusterAutoScaling?: pulumi.Input<inputs.EKSClusterAutoscalerPolicyArgs>;
    /**
     * The EBS CSI IAM policy.
     */
    ebsCsi?: pulumi.Input<inputs.EKSEBSCSIPolicyArgs>;
    /**
     * The EFS CSI IAM policy.
     */
    efsCsi?: pulumi.Input<inputs.EKSEFSCSIPolicyArgs>;
    /**
     * The External DNS IAM policy.
     */
    externalDns?: pulumi.Input<inputs.EKSExternalDNSPolicyArgs>;
    /**
     * The External Secrets policy.
     */
    externalSecrets?: pulumi.Input<inputs.EKSExternalSecretsPolicyArgs>;
    /**
     * The FSx for Lustre CSI Driver IAM policy.
     */
    fsxLustreCsi?: pulumi.Input<inputs.FSxLustreCSIPolicyArgs>;
    /**
     * The Karpenter Controller policy.
     */
    karpenterController?: pulumi.Input<inputs.EKSKarpenterControllerPolicyArgs>;
    /**
     * The Load Balancer policy.
     */
    loadBalancer?: pulumi.Input<inputs.EKSLoadBalancerPolicyArgs>;
    /**
     * The Node Termination Handler policy to the role.
     */
    nodeTerminationHandler?: pulumi.Input<inputs.EKSNodeTerminationHandlerPolicyArgs>;
    /**
     * The Velero IAM policy.
     */
    velero?: pulumi.Input<inputs.EKSVeleroPolicyArgs>;
    /**
     * The VPC CNI IAM policy to the role.
     */
    vpnCni?: pulumi.Input<inputs.EKSVPNCNIPolicyArgs>;
}
/**
 * eksrolePoliciesArgsProvideDefaults sets the appropriate defaults for EKSRolePoliciesArgs
 */
export function eksrolePoliciesArgsProvideDefaults(val: EKSRolePoliciesArgs): EKSRolePoliciesArgs {
    return {
        ...val,
        karpenterController: (val.karpenterController ? pulumi.output(val.karpenterController).apply(inputs.ekskarpenterControllerPolicyArgsProvideDefaults) : undefined),
    };
}

/**
 * EKS cluster and k8s ServiceAccount pairs. Each EKS cluster can have multiple k8s ServiceAccount.
 */
export interface EKSServiceAccountArgs {
    /**
     * Name of the EKS cluster.
     */
    name?: pulumi.Input<string>;
    /**
     * Service accounts to pair with the cluster.
     */
    serviceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EKSServiceAccountRoleArgs {
    /**
     * IAM Role description.
     */
    description?: pulumi.Input<string>;
    /**
     * IAM role name.
     */
    name?: pulumi.Input<string>;
    /**
     * IAM role name prefix.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * Path of admin IAM role.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for the role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for the role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The VPC CNI IAM policy to the role.
 */
export interface EKSVPNCNIPolicyArgs {
    /**
     * Determines whether to attach the VPC CNI IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * Determines whether to enable IPv4 permissions for VPC CNI policy.
     */
    enableIpv4?: pulumi.Input<boolean>;
    /**
     * Determines whether to enable IPv6 permissions for VPC CNI policy.
     */
    enableIpv6?: pulumi.Input<boolean>;
}

/**
 * The Velero IAM policy to the role.
 */
export interface EKSVeleroPolicyArgs {
    /**
     * Determines whether to attach the Velero IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * List of S3 Bucket ARNs that Velero needs access to in order to backup and restore cluster resources.
     * If not provided, a default ARN of "*" will be provided.
     */
    s3BucketArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The FSx for Lustre CSI Driver IAM policy to the role.
 */
export interface FSxLustreCSIPolicyArgs {
    /**
     * Determines whether to attach the FSx for Lustre CSI Driver IAM policy to the role.
     */
    attach: pulumi.Input<boolean>;
    /**
     * Service role ARNs to allow FSx for Lustre CSI create and manage FSX for Lustre service linked roles. If not provided,
     * the default ARN "arn:aws:iam::*:role/aws-service-role/s3.data-source.lustre.fsx.amazonaws.com/*" will be applied.
     */
    serviceRoleArns?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface OIDCProviderArgs {
    namespaceServiceAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    providerArn?: pulumi.Input<string>;
}

/**
 * The poweruser role.
 */
export interface PoweruserRoleArgs {
    /**
     * IAM role with poweruser access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of poweruser IAM role.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for poweruser role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for poweruser role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The poweruser role.
 */
export interface PoweruserRoleWithMFAArgs {
    /**
     * IAM role with poweruser access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of poweruser IAM role.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for poweruser role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for poweruser role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether admin role requires MFA.
     */
    requiresMfa?: pulumi.Input<boolean>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The readonly role.
 */
export interface ReadonlyRoleArgs {
    /**
     * IAM role with readonly access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of readonly IAM role. Defaults to '/'.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for readonly role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for readonly role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The readonly role.
 */
export interface ReadonlyRoleWithMFAArgs {
    /**
     * IAM role with readonly access.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of readonly IAM role. Defaults to '/'.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for readonly role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for readonly role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether admin role requires MFA.
     */
    requiresMfa?: pulumi.Input<boolean>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * An IAM role.
 */
export interface RoleArgs {
    /**
     * IAM role name.
     */
    name?: pulumi.Input<string>;
    /**
     * IAM role name prefix.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * Path of admin IAM role. Defaults to '/'.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for the role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for the role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An IAM role that requires MFA.
 */
export interface RoleWithMFAArgs {
    /**
     * IAM role with the access. Defaults to 'admin'.
     */
    name?: pulumi.Input<string>;
    /**
     * Path of the IAM role. Defaults to '/'.
     */
    path?: pulumi.Input<string>;
    /**
     * Permissions boundary ARN to use for the role.
     */
    permissionsBoundaryArn?: pulumi.Input<string>;
    /**
     * List of policy ARNs to use for the role.
     */
    policyArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the role requires MFA.
     */
    requiresMfa?: pulumi.Input<boolean>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

