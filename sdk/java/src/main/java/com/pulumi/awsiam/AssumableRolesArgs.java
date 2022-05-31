// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.awsiam;

import com.pulumi.awsiam.inputs.AdminRoleWithMFAArgs;
import com.pulumi.awsiam.inputs.PoweruserRoleWithMFAArgs;
import com.pulumi.awsiam.inputs.ReadonlyRoleWithMFAArgs;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import com.pulumi.core.internal.Codegen;
import java.lang.Boolean;
import java.lang.Integer;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class AssumableRolesArgs extends com.pulumi.resources.ResourceArgs {

    public static final AssumableRolesArgs Empty = new AssumableRolesArgs();

    @Import(name="admin", required=true)
    private Output<AdminRoleWithMFAArgs> admin;

    public Output<AdminRoleWithMFAArgs> admin() {
        return this.admin;
    }

    /**
     * Whether policies should be detached from this role when destroying.
     * 
     */
    @Import(name="forceDetachPolicies")
    private @Nullable Output<Boolean> forceDetachPolicies;

    /**
     * @return Whether policies should be detached from this role when destroying.
     * 
     */
    public Optional<Output<Boolean>> forceDetachPolicies() {
        return Optional.ofNullable(this.forceDetachPolicies);
    }

    /**
     * Maximum CLI/API session duration in seconds between 3600 and 43200.
     * 
     */
    @Import(name="maxSessionDuration")
    private @Nullable Output<Integer> maxSessionDuration;

    /**
     * @return Maximum CLI/API session duration in seconds between 3600 and 43200.
     * 
     */
    public Optional<Output<Integer>> maxSessionDuration() {
        return Optional.ofNullable(this.maxSessionDuration);
    }

    /**
     * Max age of valid MFA (in seconds) for roles which require MFA.
     * 
     */
    @Import(name="mfaAge")
    private @Nullable Output<Integer> mfaAge;

    /**
     * @return Max age of valid MFA (in seconds) for roles which require MFA.
     * 
     */
    public Optional<Output<Integer>> mfaAge() {
        return Optional.ofNullable(this.mfaAge);
    }

    @Import(name="poweruser")
    private @Nullable Output<PoweruserRoleWithMFAArgs> poweruser;

    public Optional<Output<PoweruserRoleWithMFAArgs>> poweruser() {
        return Optional.ofNullable(this.poweruser);
    }

    @Import(name="readonly")
    private @Nullable Output<ReadonlyRoleWithMFAArgs> readonly;

    public Optional<Output<ReadonlyRoleWithMFAArgs>> readonly() {
        return Optional.ofNullable(this.readonly);
    }

    /**
     * ARNs of AWS entities who can assume these roles.
     * 
     */
    @Import(name="trustedRoleArns")
    private @Nullable Output<List<String>> trustedRoleArns;

    /**
     * @return ARNs of AWS entities who can assume these roles.
     * 
     */
    public Optional<Output<List<String>>> trustedRoleArns() {
        return Optional.ofNullable(this.trustedRoleArns);
    }

    /**
     * AWS Services that can assume these roles.
     * 
     */
    @Import(name="trustedRoleServices")
    private @Nullable Output<List<String>> trustedRoleServices;

    /**
     * @return AWS Services that can assume these roles.
     * 
     */
    public Optional<Output<List<String>>> trustedRoleServices() {
        return Optional.ofNullable(this.trustedRoleServices);
    }

    private AssumableRolesArgs() {}

    private AssumableRolesArgs(AssumableRolesArgs $) {
        this.admin = $.admin;
        this.forceDetachPolicies = $.forceDetachPolicies;
        this.maxSessionDuration = $.maxSessionDuration;
        this.mfaAge = $.mfaAge;
        this.poweruser = $.poweruser;
        this.readonly = $.readonly;
        this.trustedRoleArns = $.trustedRoleArns;
        this.trustedRoleServices = $.trustedRoleServices;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(AssumableRolesArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private AssumableRolesArgs $;

        public Builder() {
            $ = new AssumableRolesArgs();
        }

        public Builder(AssumableRolesArgs defaults) {
            $ = new AssumableRolesArgs(Objects.requireNonNull(defaults));
        }

        public Builder admin(Output<AdminRoleWithMFAArgs> admin) {
            $.admin = admin;
            return this;
        }

        public Builder admin(AdminRoleWithMFAArgs admin) {
            return admin(Output.of(admin));
        }

        /**
         * @param forceDetachPolicies Whether policies should be detached from this role when destroying.
         * 
         * @return builder
         * 
         */
        public Builder forceDetachPolicies(@Nullable Output<Boolean> forceDetachPolicies) {
            $.forceDetachPolicies = forceDetachPolicies;
            return this;
        }

        /**
         * @param forceDetachPolicies Whether policies should be detached from this role when destroying.
         * 
         * @return builder
         * 
         */
        public Builder forceDetachPolicies(Boolean forceDetachPolicies) {
            return forceDetachPolicies(Output.of(forceDetachPolicies));
        }

        /**
         * @param maxSessionDuration Maximum CLI/API session duration in seconds between 3600 and 43200.
         * 
         * @return builder
         * 
         */
        public Builder maxSessionDuration(@Nullable Output<Integer> maxSessionDuration) {
            $.maxSessionDuration = maxSessionDuration;
            return this;
        }

        /**
         * @param maxSessionDuration Maximum CLI/API session duration in seconds between 3600 and 43200.
         * 
         * @return builder
         * 
         */
        public Builder maxSessionDuration(Integer maxSessionDuration) {
            return maxSessionDuration(Output.of(maxSessionDuration));
        }

        /**
         * @param mfaAge Max age of valid MFA (in seconds) for roles which require MFA.
         * 
         * @return builder
         * 
         */
        public Builder mfaAge(@Nullable Output<Integer> mfaAge) {
            $.mfaAge = mfaAge;
            return this;
        }

        /**
         * @param mfaAge Max age of valid MFA (in seconds) for roles which require MFA.
         * 
         * @return builder
         * 
         */
        public Builder mfaAge(Integer mfaAge) {
            return mfaAge(Output.of(mfaAge));
        }

        public Builder poweruser(@Nullable Output<PoweruserRoleWithMFAArgs> poweruser) {
            $.poweruser = poweruser;
            return this;
        }

        public Builder poweruser(PoweruserRoleWithMFAArgs poweruser) {
            return poweruser(Output.of(poweruser));
        }

        public Builder readonly(@Nullable Output<ReadonlyRoleWithMFAArgs> readonly) {
            $.readonly = readonly;
            return this;
        }

        public Builder readonly(ReadonlyRoleWithMFAArgs readonly) {
            return readonly(Output.of(readonly));
        }

        /**
         * @param trustedRoleArns ARNs of AWS entities who can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleArns(@Nullable Output<List<String>> trustedRoleArns) {
            $.trustedRoleArns = trustedRoleArns;
            return this;
        }

        /**
         * @param trustedRoleArns ARNs of AWS entities who can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleArns(List<String> trustedRoleArns) {
            return trustedRoleArns(Output.of(trustedRoleArns));
        }

        /**
         * @param trustedRoleArns ARNs of AWS entities who can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleArns(String... trustedRoleArns) {
            return trustedRoleArns(List.of(trustedRoleArns));
        }

        /**
         * @param trustedRoleServices AWS Services that can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleServices(@Nullable Output<List<String>> trustedRoleServices) {
            $.trustedRoleServices = trustedRoleServices;
            return this;
        }

        /**
         * @param trustedRoleServices AWS Services that can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleServices(List<String> trustedRoleServices) {
            return trustedRoleServices(Output.of(trustedRoleServices));
        }

        /**
         * @param trustedRoleServices AWS Services that can assume these roles.
         * 
         * @return builder
         * 
         */
        public Builder trustedRoleServices(String... trustedRoleServices) {
            return trustedRoleServices(List.of(trustedRoleServices));
        }

        public AssumableRolesArgs build() {
            $.admin = Objects.requireNonNull($.admin, "expected parameter 'admin' to be non-null");
            $.forceDetachPolicies = Codegen.booleanProp("forceDetachPolicies").output().arg($.forceDetachPolicies).def(false).getNullable();
            $.maxSessionDuration = Codegen.integerProp("maxSessionDuration").output().arg($.maxSessionDuration).def(3600).getNullable();
            $.mfaAge = Codegen.integerProp("mfaAge").output().arg($.mfaAge).def(86400).getNullable();
            return $;
        }
    }

}
