// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * This resource helps you create a single IAM Role which can be assumed by trusted
 * resources using SAML Federated Users.
 *
 * ## Example Usage
 * ## Assumable Role With SAML
 *
 * ```typescript
 * import * as iam from "@pulumi/aws-iam";
 *
 * export const assumableRoleWithSaml = new iam.AssumableRoleWithSAML("aws-iam-example-assumable-role-with-saml", {
 *     providerIds: [ "arn:aws:iam::235367859851:saml-provider/idp_saml" ],
 *     role: {
 *         name: "saml-role",
 *         policyArns: [ "arn:aws:iam::aws:policy/ReadOnlyAccess" ],
 *     },
 *     tags: {
 *         Role: "saml-role",
 *     },
 * });
 * ```
 * {{ /example }}
 */
export class AssumableRoleWithSAML extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'aws-iam:index:AssumableRoleWithSAML';

    /**
     * Returns true if the given object is an instance of AssumableRoleWithSAML.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssumableRoleWithSAML {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssumableRoleWithSAML.__pulumiType;
    }

    /**
     * ARN of IAM role.
     */
    public /*out*/ readonly roleArn!: pulumi.Output<string>;
    /**
     * Name of IAM role.
     */
    public /*out*/ readonly roleName!: pulumi.Output<string>;
    /**
     * Path of IAM role.
     */
    public /*out*/ readonly rolePath!: pulumi.Output<string>;
    /**
     * Unique ID of IAM role.
     */
    public /*out*/ readonly roleUniqueId!: pulumi.Output<string>;

    /**
     * Create a AssumableRoleWithSAML resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AssumableRoleWithSAMLArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["awsSamlEndpoint"] = (args ? args.awsSamlEndpoint : undefined) ?? "https://signin.aws.amazon.com/saml";
            resourceInputs["forceDetachPolicies"] = (args ? args.forceDetachPolicies : undefined) ?? false;
            resourceInputs["maxSessionDuration"] = (args ? args.maxSessionDuration : undefined) ?? 3600;
            resourceInputs["providerIds"] = args ? args.providerIds : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["roleArn"] = undefined /*out*/;
            resourceInputs["roleName"] = undefined /*out*/;
            resourceInputs["rolePath"] = undefined /*out*/;
            resourceInputs["roleUniqueId"] = undefined /*out*/;
        } else {
            resourceInputs["roleArn"] = undefined /*out*/;
            resourceInputs["roleName"] = undefined /*out*/;
            resourceInputs["rolePath"] = undefined /*out*/;
            resourceInputs["roleUniqueId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AssumableRoleWithSAML.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a AssumableRoleWithSAML resource.
 */
export interface AssumableRoleWithSAMLArgs {
    /**
     * AWS SAML Endpoint.
     */
    awsSamlEndpoint?: pulumi.Input<string>;
    /**
     * Whether policies should be detached from this role when destroying.
     */
    forceDetachPolicies?: pulumi.Input<boolean>;
    /**
     * Maximum CLI/API session duration in seconds between 3600 and 43200.
     */
    maxSessionDuration?: pulumi.Input<number>;
    /**
     * List of SAML Provider IDs.
     */
    providerIds?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<inputs.RoleArgs>;
    /**
     * A map of tags to add.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
