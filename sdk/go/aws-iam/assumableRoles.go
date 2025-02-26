// Code generated by Pulumi SDK Generator DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package awsiam

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// This resource helps you create predefined IAM roles (`admin`, `poweruser`, and `readonly`) which
// can be assumed by trusted resources. Trusted resources can be any IAM ARNs, typically, AWS Accounts
// and Users.
//
// ## Example Usage
// ## Assumable Roles
//
// ```go
// package main
//
// import (
//
//	iam "github.com/pulumi/pulumi-aws-iam/sdk/go/aws-iam"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//	    pulumi.Run(func(ctx *pulumi.Context) error {
//	        assumableRoles, err := iam.NewAssumableRoles(ctx, "assumable-roles", &iam.AssumableRolesArgs{
//	            TrustedRoleArns: pulumi.ToStringArray([]string{"arn:aws:iam::307990089504:root", "arn:aws:iam::835367859851:user/pulumipus"}),
//	            Admin:           iam.AdminRoleWithMFAArgs{},
//	            Poweruser: iam.PoweruserRoleWithMFAArgs{
//	                Name: pulumi.String("developer"),
//	            },
//	            Readonly: iam.ReadonlyRoleWithMFAArgs{
//	                RequiresMfa: pulumi.BoolPtr(true),
//	            },
//	        })
//	        if err != nil {
//	            return err
//	        }
//
//	        ctx.Export("assumableRoles", assumableRoles)
//
//	        return nil
//	    })
//	}
//
// ```
// {{ /example }}
type AssumableRoles struct {
	pulumi.ResourceState

	Admin     pulumi.StringMapOutput `pulumi:"admin"`
	Poweruser pulumi.StringMapOutput `pulumi:"poweruser"`
	Readonly  pulumi.StringMapOutput `pulumi:"readonly"`
}

// NewAssumableRoles registers a new resource with the given unique name, arguments, and options.
func NewAssumableRoles(ctx *pulumi.Context,
	name string, args *AssumableRolesArgs, opts ...pulumi.ResourceOption) (*AssumableRoles, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Admin == nil {
		return nil, errors.New("invalid value for required argument 'Admin'")
	}
	if isZero(args.ForceDetachPolicies) {
		args.ForceDetachPolicies = pulumi.BoolPtr(false)
	}
	if isZero(args.MaxSessionDuration) {
		args.MaxSessionDuration = pulumi.IntPtr(3600)
	}
	if isZero(args.MfaAge) {
		args.MfaAge = pulumi.IntPtr(86400)
	}
	var resource AssumableRoles
	err := ctx.RegisterRemoteComponentResource("aws-iam:index:AssumableRoles", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type assumableRolesArgs struct {
	Admin AdminRoleWithMFA `pulumi:"admin"`
	// Whether policies should be detached from this role when destroying.
	ForceDetachPolicies *bool `pulumi:"forceDetachPolicies"`
	// Maximum CLI/API session duration in seconds between 3600 and 43200.
	MaxSessionDuration *int `pulumi:"maxSessionDuration"`
	// Max age of valid MFA (in seconds) for roles which require MFA.
	MfaAge    *int                  `pulumi:"mfaAge"`
	Poweruser *PoweruserRoleWithMFA `pulumi:"poweruser"`
	Readonly  *ReadonlyRoleWithMFA  `pulumi:"readonly"`
	// ARNs of AWS entities who can assume these roles.
	TrustedRoleArns []string `pulumi:"trustedRoleArns"`
	// AWS Services that can assume these roles.
	TrustedRoleServices []string `pulumi:"trustedRoleServices"`
}

// The set of arguments for constructing a AssumableRoles resource.
type AssumableRolesArgs struct {
	Admin AdminRoleWithMFAInput
	// Whether policies should be detached from this role when destroying.
	ForceDetachPolicies pulumi.BoolPtrInput
	// Maximum CLI/API session duration in seconds between 3600 and 43200.
	MaxSessionDuration pulumi.IntPtrInput
	// Max age of valid MFA (in seconds) for roles which require MFA.
	MfaAge    pulumi.IntPtrInput
	Poweruser PoweruserRoleWithMFAPtrInput
	Readonly  ReadonlyRoleWithMFAPtrInput
	// ARNs of AWS entities who can assume these roles.
	TrustedRoleArns pulumi.StringArrayInput
	// AWS Services that can assume these roles.
	TrustedRoleServices pulumi.StringArrayInput
}

func (AssumableRolesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*assumableRolesArgs)(nil)).Elem()
}

type AssumableRolesInput interface {
	pulumi.Input

	ToAssumableRolesOutput() AssumableRolesOutput
	ToAssumableRolesOutputWithContext(ctx context.Context) AssumableRolesOutput
}

func (*AssumableRoles) ElementType() reflect.Type {
	return reflect.TypeOf((**AssumableRoles)(nil)).Elem()
}

func (i *AssumableRoles) ToAssumableRolesOutput() AssumableRolesOutput {
	return i.ToAssumableRolesOutputWithContext(context.Background())
}

func (i *AssumableRoles) ToAssumableRolesOutputWithContext(ctx context.Context) AssumableRolesOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AssumableRolesOutput)
}

// AssumableRolesArrayInput is an input type that accepts AssumableRolesArray and AssumableRolesArrayOutput values.
// You can construct a concrete instance of `AssumableRolesArrayInput` via:
//
//	AssumableRolesArray{ AssumableRolesArgs{...} }
type AssumableRolesArrayInput interface {
	pulumi.Input

	ToAssumableRolesArrayOutput() AssumableRolesArrayOutput
	ToAssumableRolesArrayOutputWithContext(context.Context) AssumableRolesArrayOutput
}

type AssumableRolesArray []AssumableRolesInput

func (AssumableRolesArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*AssumableRoles)(nil)).Elem()
}

func (i AssumableRolesArray) ToAssumableRolesArrayOutput() AssumableRolesArrayOutput {
	return i.ToAssumableRolesArrayOutputWithContext(context.Background())
}

func (i AssumableRolesArray) ToAssumableRolesArrayOutputWithContext(ctx context.Context) AssumableRolesArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AssumableRolesArrayOutput)
}

// AssumableRolesMapInput is an input type that accepts AssumableRolesMap and AssumableRolesMapOutput values.
// You can construct a concrete instance of `AssumableRolesMapInput` via:
//
//	AssumableRolesMap{ "key": AssumableRolesArgs{...} }
type AssumableRolesMapInput interface {
	pulumi.Input

	ToAssumableRolesMapOutput() AssumableRolesMapOutput
	ToAssumableRolesMapOutputWithContext(context.Context) AssumableRolesMapOutput
}

type AssumableRolesMap map[string]AssumableRolesInput

func (AssumableRolesMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*AssumableRoles)(nil)).Elem()
}

func (i AssumableRolesMap) ToAssumableRolesMapOutput() AssumableRolesMapOutput {
	return i.ToAssumableRolesMapOutputWithContext(context.Background())
}

func (i AssumableRolesMap) ToAssumableRolesMapOutputWithContext(ctx context.Context) AssumableRolesMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AssumableRolesMapOutput)
}

type AssumableRolesOutput struct{ *pulumi.OutputState }

func (AssumableRolesOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AssumableRoles)(nil)).Elem()
}

func (o AssumableRolesOutput) ToAssumableRolesOutput() AssumableRolesOutput {
	return o
}

func (o AssumableRolesOutput) ToAssumableRolesOutputWithContext(ctx context.Context) AssumableRolesOutput {
	return o
}

func (o AssumableRolesOutput) Admin() pulumi.StringMapOutput {
	return o.ApplyT(func(v *AssumableRoles) pulumi.StringMapOutput { return v.Admin }).(pulumi.StringMapOutput)
}

func (o AssumableRolesOutput) Poweruser() pulumi.StringMapOutput {
	return o.ApplyT(func(v *AssumableRoles) pulumi.StringMapOutput { return v.Poweruser }).(pulumi.StringMapOutput)
}

func (o AssumableRolesOutput) Readonly() pulumi.StringMapOutput {
	return o.ApplyT(func(v *AssumableRoles) pulumi.StringMapOutput { return v.Readonly }).(pulumi.StringMapOutput)
}

type AssumableRolesArrayOutput struct{ *pulumi.OutputState }

func (AssumableRolesArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*AssumableRoles)(nil)).Elem()
}

func (o AssumableRolesArrayOutput) ToAssumableRolesArrayOutput() AssumableRolesArrayOutput {
	return o
}

func (o AssumableRolesArrayOutput) ToAssumableRolesArrayOutputWithContext(ctx context.Context) AssumableRolesArrayOutput {
	return o
}

func (o AssumableRolesArrayOutput) Index(i pulumi.IntInput) AssumableRolesOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *AssumableRoles {
		return vs[0].([]*AssumableRoles)[vs[1].(int)]
	}).(AssumableRolesOutput)
}

type AssumableRolesMapOutput struct{ *pulumi.OutputState }

func (AssumableRolesMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*AssumableRoles)(nil)).Elem()
}

func (o AssumableRolesMapOutput) ToAssumableRolesMapOutput() AssumableRolesMapOutput {
	return o
}

func (o AssumableRolesMapOutput) ToAssumableRolesMapOutputWithContext(ctx context.Context) AssumableRolesMapOutput {
	return o
}

func (o AssumableRolesMapOutput) MapIndex(k pulumi.StringInput) AssumableRolesOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *AssumableRoles {
		return vs[0].(map[string]*AssumableRoles)[vs[1].(string)]
	}).(AssumableRolesOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*AssumableRolesInput)(nil)).Elem(), &AssumableRoles{})
	pulumi.RegisterInputType(reflect.TypeOf((*AssumableRolesArrayInput)(nil)).Elem(), AssumableRolesArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*AssumableRolesMapInput)(nil)).Elem(), AssumableRolesMap{})
	pulumi.RegisterOutputType(AssumableRolesOutput{})
	pulumi.RegisterOutputType(AssumableRolesArrayOutput{})
	pulumi.RegisterOutputType(AssumableRolesMapOutput{})
}
