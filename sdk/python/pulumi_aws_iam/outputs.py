# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'AccessKeyOutput',
    'KeybaseOutput',
    'UserOutput',
]

@pulumi.output_type
class AccessKeyOutput(dict):
    """
    The IAM access key.
    """
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "encryptedSecret":
            suggest = "encrypted_secret"
        elif key == "keyFingerprint":
            suggest = "key_fingerprint"
        elif key == "sesSmtpPasswordV4":
            suggest = "ses_smtp_password_v4"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in AccessKeyOutput. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        AccessKeyOutput.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        AccessKeyOutput.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 encrypted_secret: Optional[str] = None,
                 id: Optional[str] = None,
                 key_fingerprint: Optional[str] = None,
                 secret: Optional[str] = None,
                 ses_smtp_password_v4: Optional[str] = None,
                 status: Optional[str] = None):
        """
        The IAM access key.
        :param str encrypted_secret: The encrypted secret, base64 encoded.
        :param str id: The access key ID.
        :param str key_fingerprint: The fingerprint of the PGP key used to encrypt the secret.
        :param str secret: The access key secret.
        :param str ses_smtp_password_v4: The secret access key converted into an SES SMTP password by applying AWS's Sigv4 conversion algorithm.
        :param str status: Active or Inactive. Keys are initially active, but can be made inactive by other means.
        """
        if encrypted_secret is not None:
            pulumi.set(__self__, "encrypted_secret", encrypted_secret)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if key_fingerprint is not None:
            pulumi.set(__self__, "key_fingerprint", key_fingerprint)
        if secret is not None:
            pulumi.set(__self__, "secret", secret)
        if ses_smtp_password_v4 is not None:
            pulumi.set(__self__, "ses_smtp_password_v4", ses_smtp_password_v4)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="encryptedSecret")
    def encrypted_secret(self) -> Optional[str]:
        """
        The encrypted secret, base64 encoded.
        """
        return pulumi.get(self, "encrypted_secret")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        The access key ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="keyFingerprint")
    def key_fingerprint(self) -> Optional[str]:
        """
        The fingerprint of the PGP key used to encrypt the secret.
        """
        return pulumi.get(self, "key_fingerprint")

    @property
    @pulumi.getter
    def secret(self) -> Optional[str]:
        """
        The access key secret.
        """
        return pulumi.get(self, "secret")

    @property
    @pulumi.getter(name="sesSmtpPasswordV4")
    def ses_smtp_password_v4(self) -> Optional[str]:
        """
        The secret access key converted into an SES SMTP password by applying AWS's Sigv4 conversion algorithm.
        """
        return pulumi.get(self, "ses_smtp_password_v4")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Active or Inactive. Keys are initially active, but can be made inactive by other means.
        """
        return pulumi.get(self, "status")


@pulumi.output_type
class KeybaseOutput(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "passwordDecryptCommand":
            suggest = "password_decrypt_command"
        elif key == "passwordPgpMessage":
            suggest = "password_pgp_message"
        elif key == "secretKeyDecryptCommand":
            suggest = "secret_key_decrypt_command"
        elif key == "secretKeyPgpMessage":
            suggest = "secret_key_pgp_message"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in KeybaseOutput. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        KeybaseOutput.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        KeybaseOutput.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 password_decrypt_command: Optional[str] = None,
                 password_pgp_message: Optional[str] = None,
                 secret_key_decrypt_command: Optional[str] = None,
                 secret_key_pgp_message: Optional[str] = None):
        """
        :param str password_decrypt_command: Decrypt user password command.
        :param str password_pgp_message: Encrypted password
        :param str secret_key_decrypt_command: Decrypt access secret key command.
        :param str secret_key_pgp_message: Encrypted access secret key.
        """
        if password_decrypt_command is not None:
            pulumi.set(__self__, "password_decrypt_command", password_decrypt_command)
        if password_pgp_message is not None:
            pulumi.set(__self__, "password_pgp_message", password_pgp_message)
        if secret_key_decrypt_command is not None:
            pulumi.set(__self__, "secret_key_decrypt_command", secret_key_decrypt_command)
        if secret_key_pgp_message is not None:
            pulumi.set(__self__, "secret_key_pgp_message", secret_key_pgp_message)

    @property
    @pulumi.getter(name="passwordDecryptCommand")
    def password_decrypt_command(self) -> Optional[str]:
        """
        Decrypt user password command.
        """
        return pulumi.get(self, "password_decrypt_command")

    @property
    @pulumi.getter(name="passwordPgpMessage")
    def password_pgp_message(self) -> Optional[str]:
        """
        Encrypted password
        """
        return pulumi.get(self, "password_pgp_message")

    @property
    @pulumi.getter(name="secretKeyDecryptCommand")
    def secret_key_decrypt_command(self) -> Optional[str]:
        """
        Decrypt access secret key command.
        """
        return pulumi.get(self, "secret_key_decrypt_command")

    @property
    @pulumi.getter(name="secretKeyPgpMessage")
    def secret_key_pgp_message(self) -> Optional[str]:
        """
        Encrypted access secret key.
        """
        return pulumi.get(self, "secret_key_pgp_message")


@pulumi.output_type
class UserOutput(dict):
    """
    The IAM user.
    """
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "loginProfileEncryptedPassword":
            suggest = "login_profile_encrypted_password"
        elif key == "loginProfileKeyFingerprint":
            suggest = "login_profile_key_fingerprint"
        elif key == "loginProfilePassword":
            suggest = "login_profile_password"
        elif key == "sshKeyFingerprint":
            suggest = "ssh_key_fingerprint"
        elif key == "sshKeySshPublicKeyId":
            suggest = "ssh_key_ssh_public_key_id"
        elif key == "uniqueId":
            suggest = "unique_id"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in UserOutput. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        UserOutput.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        UserOutput.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 arn: Optional[str] = None,
                 login_profile_encrypted_password: Optional[str] = None,
                 login_profile_key_fingerprint: Optional[str] = None,
                 login_profile_password: Optional[str] = None,
                 name: Optional[str] = None,
                 ssh_key_fingerprint: Optional[str] = None,
                 ssh_key_ssh_public_key_id: Optional[str] = None,
                 unique_id: Optional[str] = None):
        """
        The IAM user.
        :param str arn: The ARN assigned by AWS for this user.
        :param str login_profile_encrypted_password: The encrypted password, base64 encoded.
        :param str login_profile_key_fingerprint: The fingerprint of the PGP key used to encrypt the password.
        :param str login_profile_password: The user password.
        :param str name: The user's name.
        :param str ssh_key_fingerprint: The unique identifier for the SSH public key.
        :param str ssh_key_ssh_public_key_id: The unique identifier for the SSH public key
        :param str unique_id: The unique ID assigned by AWS.
        """
        if arn is not None:
            pulumi.set(__self__, "arn", arn)
        if login_profile_encrypted_password is not None:
            pulumi.set(__self__, "login_profile_encrypted_password", login_profile_encrypted_password)
        if login_profile_key_fingerprint is not None:
            pulumi.set(__self__, "login_profile_key_fingerprint", login_profile_key_fingerprint)
        if login_profile_password is not None:
            pulumi.set(__self__, "login_profile_password", login_profile_password)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if ssh_key_fingerprint is not None:
            pulumi.set(__self__, "ssh_key_fingerprint", ssh_key_fingerprint)
        if ssh_key_ssh_public_key_id is not None:
            pulumi.set(__self__, "ssh_key_ssh_public_key_id", ssh_key_ssh_public_key_id)
        if unique_id is not None:
            pulumi.set(__self__, "unique_id", unique_id)

    @property
    @pulumi.getter
    def arn(self) -> Optional[str]:
        """
        The ARN assigned by AWS for this user.
        """
        return pulumi.get(self, "arn")

    @property
    @pulumi.getter(name="loginProfileEncryptedPassword")
    def login_profile_encrypted_password(self) -> Optional[str]:
        """
        The encrypted password, base64 encoded.
        """
        return pulumi.get(self, "login_profile_encrypted_password")

    @property
    @pulumi.getter(name="loginProfileKeyFingerprint")
    def login_profile_key_fingerprint(self) -> Optional[str]:
        """
        The fingerprint of the PGP key used to encrypt the password.
        """
        return pulumi.get(self, "login_profile_key_fingerprint")

    @property
    @pulumi.getter(name="loginProfilePassword")
    def login_profile_password(self) -> Optional[str]:
        """
        The user password.
        """
        return pulumi.get(self, "login_profile_password")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The user's name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="sshKeyFingerprint")
    def ssh_key_fingerprint(self) -> Optional[str]:
        """
        The unique identifier for the SSH public key.
        """
        return pulumi.get(self, "ssh_key_fingerprint")

    @property
    @pulumi.getter(name="sshKeySshPublicKeyId")
    def ssh_key_ssh_public_key_id(self) -> Optional[str]:
        """
        The unique identifier for the SSH public key
        """
        return pulumi.get(self, "ssh_key_ssh_public_key_id")

    @property
    @pulumi.getter(name="uniqueId")
    def unique_id(self) -> Optional[str]:
        """
        The unique ID assigned by AWS.
        """
        return pulumi.get(self, "unique_id")


