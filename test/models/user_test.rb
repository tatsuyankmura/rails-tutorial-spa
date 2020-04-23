require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Example User", email: "user@example.com", password: "foobar", password_confirmation: "foobar")
  end

  test "入力内容が有効な場合trueになること" do
    assert @user.valid?
  end

  test "名前が空の場合falseになること" do
    @user.name = ""
    assert_not @user.valid?
  end

  test "emailが空の場合falseになること" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "名前が50文字以上ある場合falseになること" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "emailが255文字以上ある場合falseになること" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end

  test "有効なemailの場合trueになること" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "無効なemailの場合falseになること" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end

  test "有効なemailの場合trueになること" do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?
  end

  test "パスワードが空の場合falseになること" do
    @user.password = @user.password_confirmation = " " * 6
    assert_not @user.valid?
  end

  test "パスワードが6文字以下の場合falseになること" do
    @user.password = @user.password_confirmation = "a" * 5
    assert_not @user.valid?
  end
end